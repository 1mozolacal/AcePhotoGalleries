import React, { useState, useEffect } from "react";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import Grid from "@material-ui/core/Grid";
import { uploadFileToBlob, getJSONData } from '../utils/azureStorage';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import OrderDisplay from '../components/ordering'

import "../stylesheets/home.sass"


const Tuner = () => {

    const [pictureData, pictureDataSet] = useState()

    useEffect(async () => {
        getJSONData("orderingTop.txt").then((data) => pictureDataSet(data))
    }, [])

    const handleOnDragEnd = ({ destination, source }) => {
        if(!destination){return}
        const item = pictureData[source.index]
        const newOrder = pictureData
        newOrder.splice(source.index, 1);
        newOrder.splice(destination.index, 0, item);
        pictureDataSet(newOrder)
    }

    const loadingDisplay = (<h1>Loading data... please wait</h1>)
    const tunerHeader = (
        <Grid container alignItems="flex-end" justifyContent="space-between">
            <Grid><h1>Tuner!</h1></Grid>
            <Grid>add options (content mode vs order mode,...)</Grid>
            <Grid>save buttons</Grid>
        </Grid>
    )
    return (
        <div>
            {(pictureData &&
                <Grid
                    container
                    direction="column"
                    alignItems="flex-start"
                >
                    {tunerHeader}
                    <OrderDisplay pictureData={pictureData} callBack={handleOnDragEnd} />
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