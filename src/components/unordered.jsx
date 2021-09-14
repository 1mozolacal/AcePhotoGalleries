import React from "react";
import Grid from "@material-ui/core/Grid";
import { Draggable } from 'react-beautiful-dnd';
import { DragAndDropDroppable } from './dragableZone'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import placeHolder from '../images/mountaindawn.jpg'

import '../stylesheets/tuner.sass'

const MapOutData = ({ elements, context }) => (
    elements.map((id, index) => {
        return (
            <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                    <Grid spacing={0} container ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} >
                        <Grid item xs={12}>
                            
        <Card className='card'>
            <CardMedia
                className='card-cover'
                image={context[id]['URL'] || placeHolder}
                title={context[id]['title'] || 'Coming soon....'}
            />
            <div className="card-details">
                <CardContent>
                    <div className="md-text blue-text">{context[id]['title'] || 'Bacon pancake!'}</div>
                    <br/>
                    <div className="md-text">{`$${(context[id]['prices'] && (context[id]['prices'][0] + " to $" + context[id]['prices'][4]) )|| '--'}`}</div>
                </CardContent>
            </div>
        </Card>



                        </Grid>
                    </Grid>)}
            </Draggable>)
    }))
const UnorderDisplay = ({ items, itemInfo, boxID }) => {
    return (<div className="holder">
        {<DragAndDropDroppable
            items={items}
            itemInfo={itemInfo}
            boxID={boxID}
            MapOutData={MapOutData}
            Wrapper={(props) => (<Grid style={{ minHeight: "100%" }} container direction="column" {...props.droppableProps} ref={props.innerRef}>{props.children}</Grid>)} />}
    </div>)
}

export default UnorderDisplay;