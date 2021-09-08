import React, { useState } from "react";
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import { uploadFileToBlob, getJSONData, overWriteJSON } from '../utils/azureStorage';

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
        console.log("ii %o %o %o",fileSelected,picName,paypalId)
        if (!fileSelected?.name){
            alert("failed to make pic URL")
            return
        }
        if(!picName){
            alert("No title")
            return
        }
        if(!paypalId){
            alert("no payap")
            return
        }
        const url = "https://mjmpictures.blob.core.windows.net/pics/" + fileSelected.name
        const id = paypalId
        const title = picName
        const buttonID = ''
        const prices = ''
        /*
        var tempPrice = data.split('\n')
        tempPrice = tempPrice.filter(function(value, index, arr){ 
                return value.includes("$") && value.includes("option");
            });
        tempPrice = tempPrice.map( function(value,index){
        return (value.split('$')[1]).split(" CAD")[0]
        })

        var tempID = data.split('\n')
        tempID = tempID.filter(function(value, index, arr){ 
        return value.includes('type="hidden" name="hosted_button_id"');
        });
        tempID = tempID[0].split("value=")[1]
        tempID = tempID.split('"')[1]
        */

        var returnJSONData;
        await getJSONData("rawData.json").then(data => {
            if(data[0]){
                returnJSONData = data[1]
            }  })
        if (returnJSONData === undefined){
            alert("failed to readJson")
            return
        }
        if (returnJSONData[id] !== undefined){
            alert(`data already exists for ID: ${returnJSONData[id]}`)
            return
        }
        returnJSONData[id]= {
            "title": "TEST--" + title, 
            "prices": prices, 
            "paypalID": buttonID, 
            "URL": url 
        }
        var returnListData;
        await getJSONData("display.json").then(data => {
            if(data[0]){
                returnListData = data[1]
            }  })
        if (returnListData === undefined){
            alert("failed to readList")
            return
        }
        returnListData.push(id)
        
        await overWriteJSON(returnJSONData,"rawData.json")
        await overWriteJSON(returnListData,"display.json")
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