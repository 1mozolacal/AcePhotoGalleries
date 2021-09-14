import React from "react";
import Grid from "@material-ui/core/Grid";
import { Draggable } from 'react-beautiful-dnd';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import { DragAndDropDroppable } from './dragableZone'


const listStyle = {
    listStyleType: 'none'
}


const MapOutData = ({ elements, context }) => (
    elements.map(([id, width], index) => {
        return (
            <Draggable key={id} draggableId={id} index={index} style={listStyle}>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                        <Grid container justifyContent="center" alignContent="center">
                            <Grid item xs={1}>
                                <DragHandleIcon></DragHandleIcon>
                            </Grid>
                            <Grid item xs={11}>
                                T:{context[id]["title"]}
                            </Grid>
                        </Grid>
                    </div>)}
            </Draggable>)
    }))
const OrderDisplay = ({ items, itemInfo, callBack, boxID }) => {
    return (<>
        {items &&
            <DragAndDropDroppable
                items={items}
                itemInfo={itemInfo}
                callBack={callBack}
                boxID={boxID}
                MapOutData={MapOutData}
                Wrapper={(props) => (<ul style={{ minHeight: "200px" }} {...props.droppableProps} ref={props.innerRef}>{props.children}</ul>)} />}
    </>)
}

export default OrderDisplay;