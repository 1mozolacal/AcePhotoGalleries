import React from "react";
import Grid from "@material-ui/core/Grid";
import { Draggable } from 'react-beautiful-dnd';
import { DragAndDropDroppable } from './dragableZone'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import placeHolder from '../images/mountaindawn.jpg'

import '../stylesheets/tuner.sass'

const MapOutData = ({ elements, context }) => (
    elements.map((id, index) => {
        return (
            <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                    <Grid spacing={0} container ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                        <Grid item>
                            <Grid container>
                                <Grid item xs={12}>
                                    <div style={{ width: "100%" }} >{context[id]["title"]}</div>
                                </Grid>
                                <Grid item xs={12}>
                                    <img style={{ width: "100%" }} src={placeHolder} />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>)}
            </Draggable>)
    }))
const UnorderDisplay = ({ items, itemInfo, callBack, buttonCallBack, boxID, title = "grouping" }) => {
    return (<div className="holder">
        <ArrowForwardIosIcon onClick={() => buttonCallBack(undefined, true)} />
        <h3><span>Title: {title}</span></h3>
        {<DragAndDropDroppable
            items={items}
            itemInfo={itemInfo}
            callBack={callBack}
            boxID={boxID}
            MapOutData={MapOutData}
            Wrapper={(props) => (<Grid style={{ minHeight: "100%" }} container direction="column" {...props.droppableProps} ref={props.innerRef}>{props.children}</Grid>)} />}
    </div>)
}

export default UnorderDisplay;