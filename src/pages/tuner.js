import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { getJSONData, getJSONDataOLD, uploadNewJsonFile, overWriteJSON } from '../utils/azureStorage';
import OrderDisplay from '../components/ordering'
import UnorderDisplay from '../components/unordered'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { withStyles } from '@material-ui/core/styles';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

import "../stylesheets/tuner.sass"


const Tuner = () => {
    /*
    json = {
        ordered: [],
        unoreded: [].,
    }
    
    
    
    */
    const [pictureData, pictureDataSet] = useState()
    const [pictureInfo,pictureInfoSet] = useState()
    const [orderedData, orderedDataSet] = useState()
    const [unorderedData, unorderedDataSet] = useState()
    const [unlistedData, unlistedDataSet] = useState()

    const [columWidths, setColumnWidths] = useState([11, 1, [6, 6]])

    useEffect(async () => {
        getJSONData("display.json").then((data) => {
            const extractData = data[1]
            orderedDataSet(extractData['ordered'])
            unorderedDataSet(extractData['unordered'])
            unlistedDataSet(extractData['unlisted'])
        })
        getJSONData("rawData.json").then( (data) =>{
            pictureInfoSet(data[1])
        })
    }, [])

    const handleOnDragEnd = ({ destination, source }) => {
        if (!destination) { return }
        const item = pictureData[source.index]
        const newOrder = pictureData
        newOrder.splice(source.index, 1);
        newOrder.splice(destination.index, 0, item);
        pictureDataSet(newOrder)
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

    const loadingDisplay = (<h1>Loading data... please wait</h1>)
    const tunerHeader = (
        <Grid classes={{ root: "tuner-header" }} container alignItems="flex-end">
            <Grid><h1>Tuner!</h1></Grid>
            <Grid>add options (content mode vs order mode,...)</Grid>
            <Grid>save buttons</Grid>
        </Grid>
    )
    var otherPic = []
    if (pictureData) {
        otherPic = pictureData.map((value, index) => { return ["" + index, value[1], value[2]] })
    }
    console.log("with: %o CON %o",orderedData, pictureInfo)
    return (
        <div className="tuner-page">
            {( (pictureInfo && orderedData && unorderedData && unlistedData) 
            &&
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
                                        {columWidths[2][0] == 10 && <UnorderDisplay items={unorderedData} itemInfo={pictureInfo} buttonCallBack={handleShelfButton} callBack={handleOnDragEnd} boxID="unordered" />
                                            || <ArrowBackIosIcon onClick={() => handleShelfButton(0, false)} />}
                                    </Grid>
                                    <Grid item xs={columWidths[2][1]} classes={{ root: "tuner-shelf" }}>
                                        {columWidths[2][1] == 10 && <UnorderDisplay items={unlistedData} itemInfo={pictureInfo} buttonCallBack={handleShelfButton} callBack={handleOnDragEnd} boxID="unlisted" />
                                            || <ArrowBackIosIcon onClick={() => handleShelfButton(1, false)} />}
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DragDropContext>
                </Grid>)
                ||
                <div>
                    <h1>Loading data... please wait</h1>
                    <h3>If this take more than a few seconds consult the dev team.</h3>
                </div>}
        </div>
    );
}

export default Tuner;

// <Grid item >
// <UnorderDisplay pictureData={pictureData} callBack={handleOnDragEnd} boxID="unlisted" />
// </Grid>
