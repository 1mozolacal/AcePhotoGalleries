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
const UnorderedDisplays = (props) => {

    const handleOnDragEnd = ({ destination, source }) => {
        if(!destination){return}
        const item = props.pictureData[source.index]
        const newOrder = props.pictureData
        newOrder.splice(source.index, 1);
        newOrder.splice(destination.index, 0, item);
        props.pictureDataSet(newOrder)
    }
    console.log(props)
    return (<>
    {props.pictureData &&
        (<DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="basic">{(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef}>
                    <MapOutData items={props.pictureData} />
                    {provided.placeholder}
                </ul>)}
            </Droppable>
        </DragDropContext>)} </>)
}

export default UnorderedDisplays;