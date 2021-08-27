import React, { useState } from "react";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import {uploadFileToBlob} from '../utils/azureStorage';

import "../stylesheets/home.sass"

const Uploads = () => {
    const style = {
        color: "white"
    }
    const [fileSelected, setFileSelected] = useState()

    const uploadFile = async () => {
        await uploadFileToBlob(fileSelected)
        setFileSelected(null)
    }

    return (
        <Container>
            <h1>Upload new photo</h1>
            <Input label="Update file here" type="file" onChange={(e) => setFileSelected(e.target.files[0])} style={style} />
            <hr/>
            <Button variant="contained" className="grid-button" type="submit" onClick={uploadFile}>Upload</Button>
        </Container>
    );
}

export default Uploads;