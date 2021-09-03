import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const OrderDisplay = ({pictureData,callBack,boxID,MapOutData,Wrapper}) => {
    return (<>
    {pictureData &&
        (<DragDropContext onDragEnd={({ destination, source }) => callBack({ destination:destination, source:source })}>
            <Droppable droppableId={boxID}>{(provided) => (
                <Wrapper {...provided.droppableProps} ref={provided.innerRef}>
                    <MapOutData item={pictureData}/>
                    {provided.placeholder}
                </Wrapper>)}
            </Droppable>
        </DragDropContext>)} </>)
}

export default OrderDisplay;