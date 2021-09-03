import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const DragAndDrop = ({ pictureData, callBack, boxID, MapOutData, Wrapper }) => {
    console.log("stuff: %o, %o, %o, %o",pictureData, boxID, Wrapper)
    return (
        <DragDropContext onDragEnd={({ destination, source }) => callBack({ destination: destination, source: source })}>
            <Droppable droppableId={boxID}>{(provided) => (
                <Wrapper droppableProps={provided.droppableProps} innerRef={provided.innerRef}>
                    <MapOutData items={pictureData} />
                    {provided.placeholder}
                </Wrapper>)}
            </Droppable>
        </DragDropContext>)
}

export default DragAndDrop;