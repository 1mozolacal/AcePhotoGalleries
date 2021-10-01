import React from "react";
import { DragDropContext, Droppable } from 'react-beautiful-dnd';


const DragAndDrop = (props) => {
    return (
        <DragDropContext onDragEnd={({ destination, source }) => props.callBack({ destination: destination, source: source })}>
            <DragAndDropDroppable {...props} />
        </DragDropContext>)
}

const DragAndDropDroppable = ({ items, itemCallBack, itemInfo, boxID, MapOutData, Wrapper }) => {
    return (
        <Droppable style={{ overflow: "scroll", height: "100%" }} droppableId={boxID}>{(provided) => (
            <Wrapper droppableProps={provided.droppableProps} innerRef={provided.innerRef}>
                <MapOutData elements={items} callBack={itemCallBack} context={itemInfo} />
                {provided.placeholder}
            </Wrapper>)}
        </Droppable>
    )
};
const EmptyDroppable = ({ boxID, holderStyle }) => (
    <Droppable droppableId={boxID}>
        {(provided) => (<div style={holderStyle} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
            {provided.placeholder}
        </div>
        )}
    </Droppable>)

export default DragAndDrop;
export { DragAndDropDroppable, EmptyDroppable };