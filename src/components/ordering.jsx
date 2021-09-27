import React from "react";
import Grid from "@material-ui/core/Grid";
import { Draggable } from 'react-beautiful-dnd';
import DragHandleIcon from '@material-ui/icons/DragHandle';
import { DragAndDropDroppable } from './dragableZone'

import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

const listStyle = {
    listStyleType: 'none'
}


const MapOutData = ({ elements, context }) => (
    elements.map(([id, width,callback], index) => {
        return (
            <Draggable key={id} draggableId={id} index={index} style={listStyle}>
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                        <Grid container justifyContent="center" alignContent="center">
                            <Grid item xs={8}>

                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="flex-start"
                                >
                                    <Grid item>{context[id]["title"]}</Grid>
                                    <Grid item><img style={{ width: "100%" , maxHeight:"150px"}} src={context[id]["URL"]}></img></Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={4}>
                                <Grid
                                    container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center"
                                    spacing={2}
                                    classes={{ root: "max-height" }}
                                >
                                    <Grid item >
                                        <Button className="grid-button" href={`/editor?id=${id}`}>Change Info</Button>
                                    </Grid>
                                    <Grid item>
                                        <ButtonGroup variant="text" className="grid-button">
                                            <Button onClick={() => callback(id,3)} className={width==3 ? "button-dark-bg" : undefined}>25%</Button>
                                            <Button onClick={() => callback(id,4)} className={width==4 ? "button-dark-bg" : undefined}>33%</Button>
                                            <Button onClick={() => callback(id,6)} className={width==6 ? "button-dark-bg" : undefined}>50%</Button>
                                            <Button onClick={() => callback(id,8)} className={width==8 ? "button-dark-bg" : undefined}>66%</Button>
                                            <Button onClick={() => callback(id,9)} className={width==9 ? "button-dark-bg" : undefined}>75%</Button>
                                        </ButtonGroup>
                                    </Grid>
                                </Grid>
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