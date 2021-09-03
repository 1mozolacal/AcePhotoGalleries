import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import DragHandleIcon from '@material-ui/icons/DragHandle';



const MapOutData = ({items}) => (
    items.map(([id, width, title], index) => {
        return (
            <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                    <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <Grid container>
                            <Grid item xs={1}>
                                <DragHandleIcon></DragHandleIcon>
                            </Grid>
                            <Grid item xs={11}>
                                {title}
                            </Grid>
                        </Grid>
                    </li>)}
            </Draggable>)
    }))
const OrderDisplay = ({pictureData,callBack,boxID}) => {
    console.log("The call %o",callBack)
    return (<>
    {pictureData &&
        (<DragDropContext onDragEnd={({ destination, source }) => callBack({ destination:destination, source:source })}>
            <Droppable droppableId={boxID}>{(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                    <MapOutData items={pictureData} />
                    {provided.placeholder}
                </ul>)}
            </Droppable>
        </DragDropContext>)} </>)
}

export default OrderDisplay;