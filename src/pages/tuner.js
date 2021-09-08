import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { getJSONData, getJSONDataOLD, uploadNewJsonFile, overWriteJSON } from '../utils/azureStorage';
import OrderDisplay from '../components/ordering'
import UnorderDisplay from '../components/unordered'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import SidebarTuner from '../components/SidebarTuner'
import {EmptyDroppable} from '../components/dragableZone'

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
        if(destinationDroppableId === "trash"){
            destinationDroppableId = "unlisted"
        }
        if(destinationDroppableId == "recover"){
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

    
    const tunerHeader = (
        <Grid classes={{ root: "tuner-header" }} container alignItems="center" justifyContent="space-between">

            <Grid item>
                <Grid container alignItems="center" justifyContent="center" spacing={3}>
                    <Grid item>
                        <h1>Tuner!</h1>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" className="grid-button" startIcon={<VisibilityIcon />}>Preview</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" className="grid-button" startIcon={<SaveIcon />}>Save</Button>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>

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
                        <EmptyDroppable boxID="trash" holderStyle={{ position:'relative', backgroundColor: "red", height: "100px" }}/>
                        {unorderedData && pictureInfo &&
                            <UnorderDisplay items={unorderedData} itemInfo={pictureInfo} boxID="unordered" />}
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <EmptyDroppable boxID="recover" holderStyle={{ position:'relative', backgroundColor: "green", height: "100px" }}/>
                        {unlistedData && pictureInfo &&
                            <UnorderDisplay items={unlistedData} itemInfo={pictureInfo} boxID="unlisted" />}
                    </TabPanel>
                </SidebarTuner>
            </Grid>

        </Grid>
    )

    const mainDisplay = (<OrderDisplay items={orderedData} itemInfo={pictureInfo} callBack={handleOnDragEnd} boxID="ordered" />)
    return (
        <DragDropContext onDragEnd={(info) => handleOnDragEnd(info)}>
            <div className="tuner-page">
                {tunerHeader}

                {(
                    (pictureInfo && orderedData && unorderedData && unlistedData)
                    && <div style={{width:"50%"}}>{mainDisplay}</div>)
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

