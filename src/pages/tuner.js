import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { getJSONData, overWriteJSON } from '../utils/azureStorage';
import OrderDisplay from '../components/ordering'
import UnorderDisplay from '../components/unordered'
import { DragDropContext } from 'react-beautiful-dnd';
import SidebarTuner from '../components/SidebarTuner'
import { EmptyDroppable } from '../components/dragableZone'
import PaypalBtn from '../components/PaypalBtn'
import CardHolder from '../components/cardHolder'

// import Sidebar from "../components/Sidebar"
import { Button } from "@material-ui/core"
import SaveIcon from '@material-ui/icons/Save'
import VisibilityIcon from '@material-ui/icons/Visibility'
import "../stylesheets/tuner.sass"
import AdminNavbar from "../components/AdminNavbar";
import AuthToken from "../components/authToken"

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
    const [orderedData, orderedDataSet] = useState() //Array: ele => [id,width]
    const [unorderedData, unorderedDataSet] = useState()//Array ele=> id
    const [unlistedData, unlistedDataSet] = useState()//Array ele=> id
    const [value, setValue] = useState(0);
    const [showPreview, setShowPreview] = useState(false)

    const [token,setToken] = useState()

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        async function makeFetch() {
            await getJSONData("display.json").then(async (data) => {
                const extractData = data[1]
                await getJSONData("rawData.json").then((info) => {
                    let picsInfo = info[1]
                    pictureInfoSet(picsInfo)
                    let ordered = extractData['ordered'].filter(ele => picsInfo[ele[0]] !== undefined)
                    let unordered = extractData['unordered'].filter(ele => picsInfo[ele] !== undefined)
                    let unlisted = extractData['unlisted'].filter(ele => picsInfo[ele] !== undefined)

                    // unorderedData.filter(ele => pictureInfo[ele] !== undefined)
                    orderedDataSet(ordered)
                    unorderedDataSet(unordered)
                    unlistedDataSet(unlisted)
                })

            })
        }
        makeFetch()
    }, [])

    const selectItemFromOrderedList = (selector, data) => {
        var itemIndex = undefined
        data.forEach((item, index) => {
            if (item[0] === selector) {
                itemIndex = index
            }
        })
        return itemIndex
    }

    const handleWidthChange = (id, newWidth) => {
        //For showing preview
        const index = selectItemFromOrderedList(id, orderedData)
        if (index !== undefined) {
            var newData = [...orderedData]
            newData[index][1] = newWidth
            orderedDataSet(newData)
        } else {
            console.error("Tried to change width of ID that does not exist: %o : in : %o", id, orderedData)
        }
    }

    const handleOnDragEnd = ({ destination, source }) => {
        if(destination === null){
            console.error("Destination is null")
            return
        }
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
        await overWriteJSON(pushData, "display.json", token)
        alert("Changes Saved")
    }
    const togglePreview = () => {
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
                <EmptyDroppable boxID="trash" holderStyle={{ position: 'relative', backgroundColor: "red", height: "30px" }} />
                <div style={{background: "red", height: 70}}></div>
                {unorderedData && pictureInfo &&
                    <UnorderDisplay items={unorderedData} itemInfo={pictureInfo} boxID="unordered" />}
            </TabPanel>
            <TabPanel value={value} index={1}>
                <EmptyDroppable boxID="recover" holderStyle={{ position: 'relative', backgroundColor: "green", height: "30px" }} />
                <div style={{background: "green", height: 70}}></div>
                {unlistedData && pictureInfo &&
                    <UnorderDisplay items={unlistedData} itemInfo={pictureInfo} boxID="unlisted" />}
            </TabPanel>
        </SidebarTuner>)

    const tunerHeader = (
        <Grid classes={{ root: "tuner-header" }} container direction='row' justifyContent="space-between" alignItems="center" spacing={2}>
            <Grid item>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    spacing={4}
                >
                    <Grid item>
                        <h1>Tuner!</h1>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" className="grid-button" onClick={togglePreview} startIcon={<VisibilityIcon />}>Preview</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" className="grid-button" onClick={saveOrdering} startIcon={<SaveIcon />}>Save</Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>

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
        return temp
    }
    const mainDisplay = showPreview ? (<CardHolder items={getGalleryData()} />) :
        (<div className="main-display">
            <OrderDisplay items={orderedData} itemCallBack={handleWidthChange} itemInfo={pictureInfo} callBack={handleOnDragEnd} boxID="ordered" />
        </div>)
    return (
        <>
            <AdminNavbar />
            <br />

            {!token && 
            <AuthToken returnToken={setToken}/>}
            
            {token && 
            <DragDropContext onDragEnd={(info) => handleOnDragEnd(info)}>
                <div className="tuner-page">
                    {tunerHeader}
                    <br />

                    {(
                        (pictureInfo && orderedData && unorderedData && unlistedData)
                        && mainDisplay)
                        ||
                        (<div>
                            <h1>Loading data... please wait</h1>
                            <h3>If this take more than a few seconds consult the dev team.</h3>
                        </div>)}
                </div>
            </DragDropContext>}
        </>
    );
}

export default Tuner;

