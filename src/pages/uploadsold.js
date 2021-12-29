import React, { useState, useEffect } from "react";
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import { uploadFileToBlob, getJSONData, overWriteJSON } from '../utils/azureStorage';
import imageCompression from 'browser-image-compression';
import AdminNavbar from "../components/AdminNavbar";

import "../stylesheets/home.sass"
import { Grid } from "@material-ui/core";
// import watermarkLogo from '../images/waterMark.png'
// import mergeImages from 'merge-images';

const Uploads = () => {
    const style = {
        color: "white"
    }

    const [fileSelected, setFileSelected] = useState()
    const [picName, setPicName] = useState('')
    const [paypalId, setPaypalId] = useState('')
    const [rawPaypalButton, setRawPaypalButton] = useState('')
    const [paypalButtonId, setPaypalButtonID] = useState()
    const [paypalPrics, setPaypalPrices] = useState()
    const [referenceData, setReferenceData] = useState()
    const [listOfDatReference,setListOfDatReference] = useState()
    const [errors, setErrors] = useState({
        name: [false, ''],
        id: [false, ''],
        button: [false, ''],
        file: [false, '']
    })
    const [token,setToken] = useState()

    const setErrorsWrapper = (type,value) =>{
        var tmpErr = { ...errors }
        tmpErr[type] = value
        setErrors(tmpErr)
    }

    useEffect(() => {
        async function makeFetch() {
            await getJSONData("rawData.json").then((data) => {
                setReferenceData(data[1])
            })
            await getJSONData("display.json").then(data => {
                setListOfDatReference(data[1])
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
        var returnListData = {...listOfDatReference};
        // await getJSONData("display.json").then(data => {
        //     if (data[0]) { returnListData = data[1] }
        // })
        if (returnJSONData === undefined || returnListData === undefined) {
            alert("failed to load data during overwrite process. Contact dev team"); return
        }
        // console.log("Return LIst: %o", returnListData)
        returnListData['unordered'].unshift(paypalId)
        returnJSONData[paypalId] = {
            "title": picName,
            "prices": paypalPrics,
            "paypalID": paypalButtonId,
            "URL": "https://mjmpictures.blob.core.windows.net/pics/" + fileSelected.name
        }


        await overWriteJSON(returnJSONData, "rawData.json", token)
        await overWriteJSON(returnListData, "display.json", token)
        await uploadFileToBlob(fileSelected, token)
        // await getJSONData("rawData.json").then(data => {
        //     if (data[0]) { setReferenceData(data[1]) }
        // })
        setReferenceData(returnJSONData)

        setErrors({
            name: [false, ''],
            id: [false, ''],
            button: [false, ''],
            file: [false, '']
        })
        setFileSelected(null)
        setPaypalId('')
        setPicName('')
        setRawPaypalButton('')
    }


    const picNameEvent = (e) => {
        if (!e.target.value) {
            setErrorsWrapper('name',[true, 'Name can not be blank'])
        } else if (e.target.value.trim() !== e.target.value ){
            setErrorsWrapper('name',[true, 'Need to trim off whitespace'])
        } else {
            setErrorsWrapper('name',[false, 'Valid'])
        }
        setPicName(e.target.value)
    }

    const paypalButtonEvent = (e) => {
        setRawPaypalButton(e.target.value)
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
            if(Object.keys(referenceData).map((item,index)=> (referenceData[item]['paypalID'])).includes(tempID)){
                setErrorsWrapper('button',[true, 'Error: button already in use'])
                return
            }
            if (tempPrice.length !== 5) {
                setErrorsWrapper('button',[true, 'Error: Need exactly 5 prices'])
                return
            }
            setPaypalButtonID(tempID)
            setPaypalPrices(tempPrice)
        } catch (err) {
            setErrorsWrapper('button',[true, 'Error when trying to parse button info' + err.message])
            return
        }
        setErrorsWrapper('button',[false, 'Valid button input'])
    }

    const paypalIDEvent = (e) => {
        setPaypalId(e.target.value)
        if (!e.target.value) {
            setErrorsWrapper('id',[true, 'Error: Can not be blank'])
        } else if (e.target.value in referenceData) {
            setErrorsWrapper('id',[true, 'Error: Id already exists in database'])
        } else if(e.target.value.trim() !== e.target.value){
            setErrorsWrapper('id',[true,'Error: Need to remove whitespace'])
        } else {
            setErrorsWrapper('id',[false,'Valid'])
        }
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
        if (imageFile === undefined){
            console.log("IMAGE IS UNDEFINED on change")
        }
        console.log(imageFile.size / 1024 / 1024)
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: (1920/4)
        }
        try {
            const compressedFile = await imageCompression(imageFile, options);
            setFileSelected(compressedFile)
            setErrorsWrapper('file',[false, 'Compression successful'])
            alert(`Successful compression. From ${(imageFile.size / 1024 / 1024).toFixed(4)} MB to ${(compressedFile.size / 1024 / 1024).toFixed(4)} MB`)
        } catch (error) {
            console.log(error);
            setErrorsWrapper('file',[true, 'Failed Compression'])
            alert('Failed Compression')
        }
        
    }
    return (
        referenceData && token &&
        (<>
        <AdminNavbar />
        <Container>
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
                {fileSelected && <img alt="preview of upload" style={{width:"150px"}} src={URL.createObjectURL(fileSelected)}></img>}
                </Grid>

            </Grid>
            <br />

            <Button variant="contained" className="grid-button" type="submit" onClick={uploadFile}>Upload</Button>
            <div></div>
            
        </Container>
        <div>
            <h3>Unordered list (top 5)</h3>
            <ul>
            {listOfDatReference && listOfDatReference['unordered'].map( (ele,index) =>{
                if (index>=5){
                    return undefined
                }
                return (<li>{ele}</li>)
            })}
            </ul>
        </div>
        </>)
    ) || (<div>Loading data... (note: not yet configured with auth token)</div>)
}

export default Uploads;