import React, { useState, useEffect } from "react";
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import { uploadFileToBlob, getJSONData, overWriteJSON } from '../utils/azureStorage';
import imageCompression from 'browser-image-compression';

import "../stylesheets/home.sass"
import { Grid } from "@material-ui/core";
import watermarkLogo from '../images/waterMark.png'
import mergeImages from 'merge-images';

const Uploads = () => {
    const style = {
        color: "white"
    }

    const [fileSelected, setFileSelected] = useState()
    const [picName, setPicName] = useState()
    const [paypalId, setPaypalId] = useState()
    const [paypalButtonId, setPaypalButtonID] = useState()
    const [paypalPrics, setPaypalPrices] = useState()
    const [referenceData, setReferenceData] = useState()
    const [errors, setErrors] = useState({
        name: [false, ''],
        id: [false, ''],
        button: [false, ''],
        file: [false, '']
    })

    useEffect(() => {
        async function makeFetch() {
            await getJSONData("rawData.json").then((data) => {
                setReferenceData(data[1])
            })
        }
        makeFetch()
    }, [])

    const uploadFile = async () => {
        if ((errors['name'][0] || errors['id'][0] || errors['button'][0] || errors['file'][0])
            || !(fileSelected && picName && paypalId && paypalButtonId && paypalPrics)) {
            alert("Fix errors or missing data before submitting")
            return
        }

        var returnJSONData = { ...referenceData };
        var returnListData;
        await getJSONData("display.json").then(data => {
            if (data[0]) { returnListData = data[1] }
        })
        if (returnJSONData === undefined || returnListData === undefined) {
            alert("failed to load data during overwrite process"); return
        }
        console.log("Return LIst: %o", returnListData)
        returnListData['unordered'].push(paypalId)
        returnJSONData[paypalId] = {
            "title": "TEST--" + picName,
            "prices": paypalPrics,
            "paypalID": paypalButtonId,
            "URL": "https://mjmpictures.blob.core.windows.net/pics/" + fileSelected.name
        }


        await overWriteJSON(returnJSONData, "rawData.json")
        await overWriteJSON(returnListData, "display.json")
        await uploadFileToBlob(fileSelected)
        reset()
        await getJSONData("rawData.json").then(data => {
            if (data[0]) { setReferenceData(data[1]) }
        })

    }


    const reset = () => {
        setFileSelected(null)
        setPaypalId(null)
        setPicName(null)
    }

    const picNameEvent = (e) => {
        const newName = e.target.value.trim()
        if (!newName) {
            var tmpErr = { ...errors }
            tmpErr['name'] = [true, 'Name can not be blank']
            setErrors(tmpErr)
            return
        }
        setPicName(newName)
        var tmpErr = { ...errors }
        tmpErr['name'] = [false, 'Valid']
        setErrors(tmpErr)
    }

    const paypalButtonEvent = (e) => {
        try {
            const data = e.target.value
            var tempPrice = data.split('\n')
            tempPrice = tempPrice.filter(function (value, index, arr) {
                return value.includes("$") && value.includes("option");
            });
            tempPrice = tempPrice.map(function (value, index) {
                return (value.split('$')[1]).split(" CAD")[0]
            })

            var tempID = data.split('\n')
            tempID = tempID.filter(function (value, index, arr) {
                return value.includes('type="hidden" name="hosted_button_id"');
            });
            tempID = tempID[0].split("value=")[1]
            tempID = tempID.split('"')[1]
            if (tempPrice.length != 5) {
                var tmpErr = { ...errors }
                tmpErr['button'] = [true, 'Error: Need exactly 5 prices']
                setErrors(tmpErr)
                return
            }
            setPaypalButtonID(tempID)
            setPaypalPrices(tempPrice)
        } catch (err) {
            var tmpErr = { ...errors }
            tmpErr['button'] = [true, 'Error when trying to parse button info' + err.message]
            setErrors(tmpErr)
            return
        }
        var tmpErr = { ...errors }
        tmpErr['button'] = [false, 'Valid button input']
        setErrors(tmpErr)
    }

    const paypalIDEvent = (e) => {
        const newID = e.target.value.trim()
        if (!newID) {
            var tmpErr = { ...errors }
            tmpErr['id'] = [true, 'Error: Can not be blank']
            setErrors(tmpErr)
            return
        }
        if (newID in referenceData) {
            var tmpErr = { ...errors }
            tmpErr['id'] = [true, 'Error: Id already exists in database']
            setErrors(tmpErr)
            return
        }
        setPaypalId(newID)
        var tmpErr = { ...errors }
        tmpErr['id'] = [false, 'Valid']
        setErrors(tmpErr)
    }
    const imageEvent = async (e) => {
        // function getBase64(file) {
        //     var reader = new FileReader();
        //     reader.readAsDataURL(file);
        //     reader.onload = function () {
        //       console.log(reader.result);
        //     };
        //     reader.onerror = function (error) {
        //       console.log('Error: ', error);
        //     };
        //  }
        // getBase64(e.target.files[0])
        // mergeImages([watermarkLogo, e.target.files[0]])
        //     .then(b64 => console.log(b64));
        const imageFile = e.target.files[0];
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 960
        }
        try {
            const compressedFile = await imageCompression(imageFile, options);
            setFileSelected(compressedFile)
            var tmpErr = { ...errors }
            tmpErr['file'] = [false, 'Compression successful']
            setErrors(tmpErr)
        } catch (error) {
            console.log(error);
            var tmpErr = { ...errors }
            tmpErr['file'] = [true, 'Failed to compress file']
            setErrors(tmpErr)
            return
        }
    }
    return (
        referenceData &&
        (<Container>
            <h1>Upload new photo</h1>
            <br />
            <Grid container className="upload-form" spacing={3}>
                <Grid item xs={6}>
                    <TextField
                        label="Picture's name"
                        type="text"
                        fullWidth
                        error={errors['name'][0]}
                        helperText={errors['name'][1]}
                        onChange={picNameEvent} />
                </Grid>

                <Grid item xs={6}>
                    <TextField
                        label="Paypal ID"
                        type="text"
                        fullWidth
                        error={errors['id'][0]}
                        helperText={errors['id'][1]}
                        onChange={paypalIDEvent} />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        multiline
                        label="Paypal Button"
                        fullWidth
                        error={errors['button'][0]}
                        helperText={errors['button'][1]}
                        onChange={paypalButtonEvent} />
                </Grid>
                <Grid item xs={12}>
                    <Input label="Update file here" type="file" onChange={imageEvent} style={style} fullWidth />
                </Grid>

            </Grid>
            <br />

            <Button variant="contained" className="grid-button" type="submit" onClick={uploadFile}>Upload</Button>
        </Container>)
    ) || (<div>Loading data...</div>)
}

export default Uploads;