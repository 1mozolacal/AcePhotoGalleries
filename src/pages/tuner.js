import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { getJSONData, getJSONDataOLD, uploadNewJsonFile, overWriteJSON } from '../utils/azureStorage';
import OrderDisplay from '../components/ordering'
import UnorderDisplay from '../components/unordered'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { DragDropContext } from 'react-beautiful-dnd';

// import Sidebar from "../components/Sidebar"
import { Button } from "@material-ui/core"
import SaveIcon from '@material-ui/icons/Save'
import VisibilityIcon from '@material-ui/icons/Visibility'
import "../stylesheets/tuner.sass"


const Tuner = () => {
    const [pictureInfo, pictureInfoSet] = useState()
    const [orderedData, orderedDataSet] = useState()
    const [unorderedData, unorderedDataSet] = useState()
    const [unlistedData, unlistedDataSet] = useState()

    const [columWidths, setColumnWidths] = useState([11, 1, [6, 6]])

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
        if (!destination) { return }
        var temp;
        if (source.droppableId === "ordered") {
            temp = [orderedData[source.index], orderedData, orderedDataSet]
        } else if (source.droppableId === "unordered") {
            temp = [[unorderedData[source.index], 6], unorderedData, unorderedDataSet]
        } else if (source.droppableId === "unlisted") {
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
            if (destinationSetter === oldSourceDataSetter) {
                newDest = newSource
            } else {
                oldSourceDataSetter(newSource)
                newDest = destinationData
            }
            newDest.splice(destination.index, 0, insertData);
            destinationSetter(newDest)
        }
        if (destination.droppableId === "ordered") {
            insertInto(orderedData, orderedDataSet, oldSourceData)
        } else if (destination.droppableId === "unordered") {
            insertInto(unorderedData, unorderedDataSet, oldSourceData[0])
        } else if (destination.droppableId === "unlisted") {
            insertInto(unlistedData, unlistedDataSet, oldSourceData[0])
        } else {
            alert("ERROR: destination to unknow droppable container. Report this to dev team.")
            return
        }

    }

    const handleShelfButton = (shelfID, close) => {
        if (close) {
            setColumnWidths([11, 1, [6, 6]])
            return
        }
        var tempCol = [9, 3, [2, 2]]
        tempCol[2][shelfID] = 10
        setColumnWidths(tempCol)
    }

    const tunerHeader = (
        <Grid classes={{ root: "tuner-header" }} container alignItems="center" justifyContent="space-between">
            <Grid item><h1>Tuner!</h1></Grid>
            <Grid item>Add options (content mode vs order mode,...)</Grid>
            <Grid item>
                <Grid container alignItems="center" justifyContent="center" spacing={2}>
                    <Grid item>
                        <Button variant="contained" className="grid-button" startIcon={<VisibilityIcon />}>Preview</Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained" className="grid-button" startIcon={<SaveIcon />}>Save</Button>
                    </Grid>
                </Grid>
            </Grid>

        </Grid>
    )

    const mainDisplay = (
        <Grid
            container
            direction="column"
            alignItems="flex-start"
            classes={{ root: "max-height" }}
        >
            {tunerHeader}
            <DragDropContext onDragEnd={(info) => handleOnDragEnd(info)}>
                <Grid classes={{ root: "tuner-body" }} container direction="row" alignItems="flex-start">
                    <Grid xs={columWidths[0]} item >
                        <OrderDisplay items={orderedData} itemInfo={pictureInfo} callBack={handleOnDragEnd} boxID="ordered" />
                    </Grid>
                    <Grid item xs={columWidths[1]} classes={{ root: "max-height" }}>
                        <Grid container classes={{ root: "max-height" }}>
                            <Grid item xs={columWidths[2][0]} classes={{ root: "tuner-shelf" }}>
                                {(columWidths[2][0] === 10 && <UnorderDisplay items={unorderedData} itemInfo={pictureInfo} buttonCallBack={handleShelfButton} callBack={handleOnDragEnd} boxID="unordered" />)
                                    || <ArrowBackIosIcon onClick={() => handleShelfButton(0, false)} />}
                            </Grid>
                            <Grid item xs={columWidths[2][1]} classes={{ root: "tuner-shelf" }}>
                                {(columWidths[2][1] === 10 && <UnorderDisplay items={unlistedData} itemInfo={pictureInfo} buttonCallBack={handleShelfButton} callBack={handleOnDragEnd} boxID="unlisted" />)
                                    || <ArrowBackIosIcon onClick={() => handleShelfButton(1, false)} />}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </DragDropContext>
        </Grid>
    )
    return (
        <>
            {/* <Sidebar/> */}
            <div className="tuner-page">
                {(
                    (pictureInfo && orderedData && unorderedData && unlistedData)
                    && mainDisplay)
                    ||
                    (<div>
                        <h1>Loading data... please wait</h1>
                        <h3>If this take more than a few seconds consult the dev team.</h3>
                    </div>)}
            </div>
        </>
    );
}

export default Tuner;

