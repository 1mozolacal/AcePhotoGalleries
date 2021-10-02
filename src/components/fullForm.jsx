import React, { useState, useEffect } from "react"
import Form from "../components/form"
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import { uploadFileToBlob, getJSONData, overWriteJSON } from '../utils/azureStorage';
import imageCompression from 'browser-image-compression';
import { Button, FormLabel, FormControl, FormControlLabel, RadioGroup, Radio } from "@material-ui/core";

const FullForm = ({ title, items, preData, overrideError }) => {
    const [controllerData, setControllerData] = useState(() => () => console.error("controll data not set"))
    const [controllerErrors, setControllerErrors] = useState(() => () => console.error("control errors not set"))
    const [reset, setReset] = useState(0)
    const [referenceData, setReferenceData] = useState()
    const [compressionFactor, setCompressionFactor] = useState("2")

    useEffect(() => {
        async function makeFetch() {
            await getJSONData("rawData.json").then((data) => {
                setReferenceData(data[1])
            })
        }
        makeFetch()
    }, [])

    const errorSetter = (failed, type, message, setError, setHelp) => {
        setError(failed)
        setHelp(message)
        controllerErrors(failed, type, message)
    }

    const defaultWrapper = (props) => (<TextField {...props}>{props.children}</TextField>)
    const picNameItem = {
        validateFunc: (event, setValue, setError, setHelperText) => {
            const newValue = event.target.value
            setValue(newValue)
            controllerData('name', newValue)
            if (!newValue) {
                errorSetter(true, 'name', "Name can be no be blank", setError, setHelperText)
            } else if (newValue.trim() !== newValue) {
                errorSetter(true, 'name', "Need to trim off whitespace", setError, setHelperText)
            } else {
                errorSetter(false, 'name', "Valid", setError, setHelperText)
            }
        },
        type: "text",
        width: 6,
        Wrapper: defaultWrapper,
        name: "Picture Name",
        controlled: true,
        reset: reset,
        initalValue: preData.title
    }
    const paypalID = {
        validateFunc: (event, setValue, setError, setHelperText) => {
            const newValue = event.target.value
            setValue(newValue)
            controllerData('id', newValue)
            if (referenceData === undefined) {
                errorSetter(true, 'id', "Can't load data to verify. (contact dev team if issue persists)", setError, setHelperText)
                return
            }
            if (!newValue) {
                errorSetter(true, 'id', 'can not be blank', setError, setHelperText)
            } else if (newValue in referenceData) {
                errorSetter(true, 'id', 'ID already exists', setError, setHelperText)
            } else if (newValue.trim() !== newValue) {
                errorSetter(true, 'id', 'Need to remove whitespace', setError, setHelperText)
            } else {
                errorSetter(false, 'id', "Valid", setError, setHelperText)
            }
        },
        type: "text",
        width: 6,
        Wrapper: defaultWrapper,
        name: "Paypal ID",
        controlled: true,
        reset: reset,
        initalValue: preData.id
    }
    const paypalButton = {
        validateFunc: (event, setValue, setError, setHelperText) => {
            const newValue = event.target.value
            setValue(newValue)
            try {
                const data = newValue
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
                
                if (tempPrice.length !== 5) {
                    errorSetter(true, 'button', "Need exactly 5 prices", setError, setHelperText)
                    return
                }
                controllerData('buttonID', tempID)
                controllerData('buttonPrices', tempPrice)
                if (Object.keys(referenceData).map((item, index) => (referenceData[item]['paypalID'])).includes(tempID)) {
                    errorSetter(true, 'button', "Button already in use", setError, setHelperText)
                    return
                }
                
            } catch (err) {
                errorSetter(true, 'button', 'Error when trying to parse button info' + err.message, setError, setHelperText)
                return
            }
            errorSetter(false, 'button', 'Valild Button', setError, setHelperText)
        },
        type: "text",
        width: 12,
        Wrapper: defaultWrapper,
        name: "Paypal Button",
        controlled: true,
        reset: reset,
        multiline: true,
        initalValue: preData.button
    }
    const pictureFile = {
        validateFunc: async (event, setValue, setError, setHelperText) => {
            const imageFile = event.target.files[0];
            if (imageFile === undefined) {
                console.error("IMAGE IS UNDEFINED on change")
            }
            
            var compressionText = ''
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: (1920 / parseInt(compressionFactor))
            }
            try {
                const compressedFile = await imageCompression(imageFile, options);
                compressionText = `Compression successful  From ${(imageFile.size / 1024).toFixed(1)} KB to ${(compressedFile.size / 1024).toFixed(1)} KB`
                controllerData('file', compressedFile)
                errorSetter(false, 'file', compressionText, setError, setHelperText)
                setValue(compressedFile)
                //set image value *** must add int
            } catch (error) {
                console.error(error);
                errorSetter(true, 'file', "failed compression", setError, setHelperText)
                alert('Failed Compression')
            }
            var imageAlreadyExisits = true
            await fetch("https://mjmpictures.blob.core.windows.net/pics/" + imageFile.name)
                .then( response => {
                    if (response.status === 404) {
                        imageAlreadyExisits = false
                    }
                })
            if(imageAlreadyExisits){
                errorSetter(true,'file',`Image Already exisits. Change file's name (${compressionText})`,setError,setHelperText)
            }
        },
        type: "file",
        width: 4,
        Wrapper: (props) => <Input {...props}>{props.children}</Input>,
        name: "File",
        controlled: false,
        reset: reset,
        UncontrolledDisplay: ({ item }) => (<Grid><img alt="preview of upload" style={{ width: "150px" }} src={typeof item === 'object' ? URL.createObjectURL(item) : item} /></Grid>),
        initalValue: preData.pic
    }
    const pictureWidth = {
        validateFunc: (event, setValue, setError, setHelperText) => {
            setCompressionFactor(event.target.value)
        },
        type: "radio",
        width: 4,
        name: "Pic Size",
        controlled: false,
        reset: reset,
        Wrapper: ({ label, onChange }) => (
            <FormControl component="fieldset" style={{ color: "black" }}>
                <FormLabel component="legend">{label}</FormLabel>
                <RadioGroup
                    row
                    aria-label="sizes"
                    name="radio-buttons-group"
                    value={compressionFactor}
                    onChange={onChange}
                >
                    <FormControlLabel value="1" control={<Radio />} label="Large" />
                    <FormControlLabel value="2" control={<Radio />} label="Medium" />
                    <FormControlLabel value="4" control={<Radio />} label="Small" />
                </RadioGroup>
            </FormControl>
        )
    }

    const itemsUsed = []

    if (items.title)
        itemsUsed.push(picNameItem)
    if (items.id)
        itemsUsed.push(paypalID)
    if (items.button)
        itemsUsed.push(paypalButton)
    if (items.pic) {
        itemsUsed.push(pictureWidth)
        itemsUsed.push(pictureFile)
    }

    return (<div>
        <h1>{title}</h1>
        <br />
        <Form
            title="Uploads page"
            items={itemsUsed}
        ></Form>
        <Controller
            callBackData={setControllerData}
            callBackErros={setControllerErrors}
            callBackReset={setReset}
            referenceData={referenceData}
            callBackRefData={setReferenceData}
            preData={preData} 
            overrideError={overrideError}/>
    </div>)
}


const Controller = ({ callBackData, callBackErros, callBackReset, referenceData, callBackRefData, preData, overrideError }) => {
    const [fileSelected, setFileSelected] = useState()
    const [picName, setPicName] = useState(preData.title ? preData.title :'')
    const [paypalId, setPaypalId] = useState(preData.id ? preData.id:'')
    const [paypalButtonId, setPaypalButtonID] = useState(preData.paypalID)
    const [paypalPrics, setPaypalPrices] = useState(preData.prices)

    const [refListData, setRefListData] = useState()
    var defaultErros = {
        name: 'not set',
        id: 'not set',
        button: 'not set',
        file: 'not set'
    }
    if (preData.title)
        delete defaultErros.name
    if (preData.id)
        delete defaultErros.id
    if (preData.button)
        delete defaultErros.button
    if (preData.pic)
        delete defaultErros.file

    const [errors, setErrors] = useState(defaultErros)//name,id,button,file

    useEffect(() => {
        callBackData(() => (type, value) => {
            switch (type) {
                case 'name':
                    setPicName(value)
                    break;
                case 'id':
                    setPaypalId(value)
                    break;
                case 'buttonID':
                    setPaypalButtonID(value)
                    break;
                case 'buttonPrices':
                    setPaypalPrices(value)
                    break;
                case 'file':
                    setFileSelected(value)
                    break;
                default:
                    console.error("Data setter called on controller with invalid type: %o", type)
            }
        })
        callBackErros(() => (failed, key, value = '') => {
            setErrors(pre => {
                const old = JSON.parse(JSON.stringify(pre))
                if (failed) {
                    old[key] = value
                } else {
                    old[key] = undefined
                }
                return old
            })
        })
        async function makeFetch() {
            await getJSONData("display.json").then((data) => {
                setRefListData(data[1])
            })
        }
        makeFetch()
    }, [])


    const uploadFile = async () => {
        if ( !overrideError && (errors['name'] || errors['id'] || errors['button'] || errors['file'])) {
            alert("Fix errors or missing data before submitting")
            console.error("Tried to submit with erros: %o", errors)
            return
        }

        var returnJSONData = { ...referenceData };
        var returnListData = {...refListData};
        await getJSONData("display.json").then(data => {
            if (data[0]) { returnListData = data[1] }
        })
        if (returnJSONData === undefined || returnListData === undefined) {
            alert("failed to load data during overwrite process"); return
        }
        if (!preData.id){
            returnListData['unordered'].unshift(paypalId)
        }
        
        returnJSONData[paypalId] = {
            "title": picName,
            "prices": paypalPrics,
            "paypalID": paypalButtonId,
            "URL": (preData.pic && !fileSelected ? preData.pic : "https://mjmpictures.blob.core.windows.net/pics/" + fileSelected.name)
        }

        await overWriteJSON(returnJSONData, "rawData.json")
        await overWriteJSON(returnListData, "display.json")
        if (preData.pic === undefined || fileSelected)
            await uploadFileToBlob(fileSelected)
        callBackRefData(returnJSONData)
        setRefListData(returnListData)
        setErrors(defaultErros)
        callBackReset(pre => { return pre + 1 })
    }

    return (
        <>
            <Button variant="contained" className="grid-button" onClick={() => { uploadFile() }}>Upload</Button>
        </>)
}


export default FullForm