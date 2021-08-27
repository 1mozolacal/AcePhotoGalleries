import React, { useState } from "react";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import {uploadFileToBlob} from '../utils/azureStorage';

import "../stylesheets/home.sass"

const Uploads = () => {

    const [fileSelected, setFileSelected] = useState()

    const uploadFile = async () => {

        await uploadFileToBlob(fileSelected)
    }

    return (
        <div>
            <h1>Upload</h1>
            <Input label="Update file here" type="file" onChange={(e) => setFileSelected(e.target.files[0])} />
            <Button variant="contained" className="grid-button" type="submit" onClick={uploadFile}>Upload</Button>
        </div>
    );
}

export default Uploads;