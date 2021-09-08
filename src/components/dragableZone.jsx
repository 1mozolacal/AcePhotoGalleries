import React from "react";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


const DragAndDrop = (props) => {
    return (
        <DragDropContext onDragEnd={({ destination, source }) => props.callBack({ destination: destination, source: source })}>
            <DragAndDropDroppable {...props} />
        </DragDropContext>)
}

const DragAndDropDroppable = ({ items,itemInfo, boxID, MapOutData, Wrapper, callBack }) => {
    return (
            <Droppable style={{overflow: "scroll",height:"100%"}} droppableId={boxID}>{(provided) => (
                <Wrapper droppableProps={provided.droppableProps} innerRef={provided.innerRef}>
                    <MapOutData elements={items} context={itemInfo} dragSimulateCallBack={callBack}/>
                    {provided.placeholder}
                </Wrapper>)}
            </Droppable>
    )
};

export default DragAndDrop;
export {DragAndDropDroppable};