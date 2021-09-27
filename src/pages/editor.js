import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import OrderDisplay from '../components/ordering'
import UnorderDisplay from '../components/unordered'
import { DragDropContext } from 'react-beautiful-dnd';
import SidebarTuner from '../components/SidebarTuner'
import { EmptyDroppable } from '../components/dragableZone'
import PaypalBtn from '../components/PaypalBtn'
import CardHolder from '../components/cardHolder'

// import Sidebar from "../components/Sidebar"
import SaveIcon from '@material-ui/icons/Save'
import VisibilityIcon from '@material-ui/icons/Visibility'
import "../stylesheets/tuner.sass"
import AdminNavbar from "../components/AdminNavbar";

import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'

import "../stylesheets/home.sass"


const Editor = (props) => {
    console.log("CALVINN %o",props.location)
    return (<div>
        <AdminNavbar />
        
        
    </div>)
}

const EditorForm = (props) => {
    const id = props.id
    return(
        <div>
            <h1>Make edits to...</h1>
            <br />
        <Container>
        <Grid container className="upload-form" spacing={3}>
            <Grid item>
            <TextField
                    label="Title"
                    type="text"
                    fullWidth
                    error={''}
                    helperText={'No help'}
                    value={''}
                    onChange={() => {console.log("add func")}} />
            </Grid>
            <Grid item>
            <TextField
                    label="Paypal ID"
                    type="text"
                    fullWidth
                    error={''}
                    helperText={'No help'}
                    value={''}
                    onChange={() => {console.log("add func")}} />
            </Grid>
            <Grid item>
            <TextField
                    label="PayPal Buttons"
                    type="text"
                    fullWidth
                    error={''}
                    helperText={'No help'}
                    value={''}
                    onChange={() => {console.log("add func")}} />
            </Grid>
        </Grid>
        </Container>
        </div>
    )
}

export default Editor

/*
<Grid container className="upload-form" spacing={3}>
            <Grid item xs={6}>
                <TextField
                    label="Picture's name"
                    type="text"
                    fullWidth
                    error={errors['name'][0]}
                    helperText={errors['name'][1]}
                    value={picName}
                    onChange={picNameEvent} />
            </Grid>

            <Grid item xs={6}>
                <TextField
                    label="Paypal ID"
                    type="text"
                    fullWidth
                    error={errors['id'][0]}
                    helperText={errors['id'][1]}
                    value={paypalId}
                    onChange={paypalIDEvent} />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    multiline
                    label="Paypal Button"
                    fullWidth
                    error={errors['button'][0]}
                    helperText={errors['button'][1]}
                    value={rawPaypalButton}
                    onChange={paypalButtonEvent} />
            </Grid>
            <Grid item xs={6}>
                <Input
                    label="Update file here"
                    type="file"
                    error={errors['file'][0]}
                    onChange={imageEvent}
                    style={style}
                    fullWidth />
            </Grid>
            <Grid>
                {fileSelected && <img alt="preview of upload" style={{ width: "150px" }} src={URL.createObjectURL(fileSelected)}></img>}
            </Grid>

        </Grid>
        <br />

        <Button variant="contained" className="grid-button" type="submit" onClick={uploadFile}>Upload</Button>
        <div></div>
*/