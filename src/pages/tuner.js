import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { getJSONData, overWriteJSON } from '../utils/azureStorage';
import OrderDisplay from '../components/ordering'
import UnorderDisplay from '../components/unordered'
import { DragDropContext} from 'react-beautiful-dnd';
import SidebarTuner from '../components/SidebarTuner'
import { EmptyDroppable } from '../components/dragableZone'
import PaypalBtn from '../components/PaypalBtn'
import CardHolder from '../components/cardHolder'

// import Sidebar from "../components/Sidebar"
import { Button } from "@material-ui/core"
import SaveIcon from '@material-ui/icons/Save'
import VisibilityIcon from '@material-ui/icons/Visibility'
import "../stylesheets/tuner.sass"


import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={index}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
}



const Tuner = () => {
    const [pictureInfo, pictureInfoSet] = useState()
    const [orderedData, orderedDataSet] = useState()
    const [unorderedData, unorderedDataSet] = useState()
    const [unlistedData, unlistedDataSet] = useState()
    const [value, setValue] = React.useState(0);
    const [showPreview, setShowPreview] = useState(false)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        async function makeFetch() {
            await getJSONData("display.json").then((data) => {
                const extractData = data[1]
                orderedDataSet(extractData['ordered'])
                unorderedDataSet(extractData['unordered'])
                unlistedDataSet(extractData['unlisted'])
            })
            await getJSONData("rawData.json").then((data) => {
                pictureInfoSet(data[1])
            })
        }
        makeFetch()
    }, [])

    const handleOnDragEnd = ({ destination, source }) => {
        var sourceDroppableId = source.droppableId
        var destinationDroppableId = destination.droppableId
        if (destinationDroppableId === "trash") {
            destinationDroppableId = "unlisted"
        }
        if (destinationDroppableId === "recover") {
            destinationDroppableId = "unordered"
        }
        if (!destination) { return }
        var temp;
        if (sourceDroppableId === "ordered") {
            temp = [orderedData[source.index], orderedData, orderedDataSet]
        } else if (sourceDroppableId === "unordered") {
            temp = [[unorderedData[source.index], 6], unorderedData, unorderedDataSet]
        } else if (sourceDroppableId === "unlisted") {
            temp = [[unlistedData[source.index], 6], unlistedData, unlistedDataSet]
        } else {
            alert("ERROR: source from unknow droppable container. Report this to dev team.")
            return
        }
        const [oldSourceData, oldSourceDataType, oldSourceDataSetter] = temp

        const insertInto = (destinationData, destinationSetter, insertData) => {
            const newSource = oldSourceDataType
            newSource.splice(source.index, 1)
            var newDest;
            if (sourceDroppableId === destinationDroppableId) {
                newDest = newSource
            } else {
                oldSourceDataSetter(newSource)
                newDest = destinationData
            }
            newDest.splice(destination.index, 0, insertData);
            destinationSetter(newDest)
        }
        if (destinationDroppableId === "ordered") {
            insertInto(orderedData, orderedDataSet, oldSourceData)
        } else if (destinationDroppableId === "unordered") {
            insertInto(unorderedData, unorderedDataSet, oldSourceData[0])
        } else if (destinationDroppableId === "unlisted") {
            insertInto(unlistedData, unlistedDataSet, oldSourceData[0])
        } else {
            alert("ERROR: destination to unknow droppable container. Report this to dev team.")
            return
        }
    }

    const saveOrdering = async function () {
        const pushData = {
            ordered: orderedData,
            unordered: unorderedData,
            unlisted: unlistedData
        }
        await overWriteJSON(pushData, "display.json")
        alert("Changes Saved")
    }
    const togglePreview = () => {
        console.log("preveiw %o", showPreview)
        setShowPreview(!showPreview)
    }
    const sideBar = (
        <SidebarTuner>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
                <Tab label="Unordered List" />
                <Tab label="Unlisted List" />
            </Tabs>

            <TabPanel value={value} index={0}>
                <EmptyDroppable boxID="trash" holderStyle={{ position: 'relative', backgroundColor: "red", height: "100px" }} />
                {unorderedData && pictureInfo &&
                    <UnorderDisplay items={unorderedData} itemInfo={pictureInfo} boxID="unordered" />}
            </TabPanel>
            <TabPanel value={value} index={1}>
                <EmptyDroppable boxID="recover" holderStyle={{ position: 'relative', backgroundColor: "green", height: "100px" }} />
                {unlistedData && pictureInfo &&
                    <UnorderDisplay items={unlistedData} itemInfo={pictureInfo} boxID="unlisted" />}
            </TabPanel>
        </SidebarTuner>)

    const tunerHeader = (
        <Grid classes={{ root: "tuner-header" }} container direction='row' justifyContent="space-between" alignItems="center" spacing={2}>
            <Grid item>
                <h1>Tuner!</h1>
            </Grid>
            <Grid item>
                <Button variant="contained" className="grid-button" onClick={togglePreview} startIcon={<VisibilityIcon />}>Preview</Button>
            </Grid>
            <Grid item>
                <Button variant="contained" className="grid-button" onClick={saveOrdering} startIcon={<SaveIcon />}>Save</Button>
            </Grid>
            <Grid item>
                {sideBar}
            </Grid>
        </Grid>
    )
    const getGalleryData = () => {
        const temp = orderedData.map((item, index) => {//(id,title,width,minPrice,maxPrice,imageRef,paybutton)
            const picData = pictureInfo[item[0]]
            return [item[0], picData["title"], item[1], picData["prices"][0], picData["prices"][4], picData["URL"], (<PaypalBtn paypalID="RANOM" prices={picData["prices"]} />)]
        })
        console.log("temp: %o", temp)
        return temp
    }
    const mainDisplay = showPreview ? (<CardHolder items={getGalleryData()} />) : (<div style={{ width: "50%" }}><OrderDisplay items={orderedData} itemInfo={pictureInfo} callBack={handleOnDragEnd} boxID="ordered" /></div>)
    return (
        <DragDropContext onDragEnd={(info) => handleOnDragEnd(info)}>
            <div className="tuner-page">
                {tunerHeader}

                {(
                    (pictureInfo && orderedData && unorderedData && unlistedData)
                    && mainDisplay)
                    ||
                    (<div>
                        <h1>Loading data... please wait</h1>
                        <h3>If this take more than a few seconds consult the dev team.</h3>
                    </div>)}
            </div>
        </DragDropContext>
    );
}

export default Tuner;

