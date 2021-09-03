import React, { useState, useEffect } from "react";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import Grid from "@material-ui/core/Grid";
import { uploadFileToBlob, getJSONData } from '../utils/azureStorage';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import "../stylesheets/home.sass"


const Tuner = () => {

    const [pictureData, pictureDataSet] = useState()

    useEffect(async () => {
        getJSONData("ordering (1).txt").then((data) => pictureDataSet(data))
    }, [])

    const handleOnDragEnd = ({destination,source}) => {
        const item = pictureData[source.index]
        const newOrder = pictureData
        newOrder.splice(source.index, 1);
        newOrder.splice(destination.index, 0, item);
        pictureDataSet(newOrder)
    }

    const loadingDisplay = (<h1>Loading data... please wait</h1>)
    const mapOutData = () => (
        pictureData.map(([id, width, title], index) => {
            return (
                <Draggable key={id} draggableId={id} index={index}>
                    {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                            <Grid container style={{ fontSize: "2em" }} >
                                <Grid item xs={1}>
                                    <DragHandleIcon></DragHandleIcon>
                                </Grid>
                                <Grid item xs={11}>
                                    {title}
                                </Grid>
                            </Grid>
                        </li>)}
                </Draggable>)
        })
    )
    const tunerDisplay = (
        <>
            <h1>Tuner...</h1>
            {pictureData &&
                (<DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="basic">{
                        (provided) => (
                            <ul {...provided.droppableProps} ref={provided.innerRef}>

                                {mapOutData()}

                                {provided.placeholder}
                            </ul>

                        )
                    }
                    </Droppable>
                </DragDropContext>)}
        </>)

    return (
        <div>
            {(pictureData && tunerDisplay) || loadingDisplay}
        </div>
    );
}

export default Tuner;

/**
 *         {pictureData.map( (item,index) => {
            return (<div>{item}</div>)
        }) }
 */