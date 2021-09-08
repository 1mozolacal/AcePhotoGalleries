import React, { useState } from "react";
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import { uploadFileToBlob } from '../utils/azureStorage';

import "../stylesheets/home.sass"
import { Grid } from "@material-ui/core";

const Uploads = () => {
    const style = {
        color: "white"
    }

    const [fileSelected, setFileSelected] = useState()
    const [picName, setPicName] = useState()
    const [paypalId, setPaypalId] = useState()


    const uploadFile = async () => {
        // Do something with the picname and paypal ID

        await uploadFileToBlob(fileSelected)
        reset()
    }


    const reset = () => {
        setFileSelected(null)
        setPaypalId(null)
        setPicName(null)
    }

    return (
        <Container>
            <h1>Upload new photo</h1>
            <br />
            <Grid container className="upload-form" spacing={3}>
                <Grid item xs={6}>
                    <TextField
                        label="Picture's name"
                        type="text"
                        fullWidth
                        onChange={(e) => setPicName(e.target.value)} />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        label="Paypal ID"
                        type="text"
                        fullWidth
                        onChange={(e) => setPaypalId(e.target.value)} />
                </Grid>

                <Grid item xs={12}>
                    <Input label="Update file here" type="file" onChange={(e) => setFileSelected(e.target.files[0])} style={style} fullWidth />
                </Grid>

            </Grid>
            <br />

            <Button variant="contained" className="grid-button" type="submit" onClick={uploadFile}>Upload</Button>
        </Container>
    );
}

export default Uploads;