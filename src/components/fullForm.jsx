import React, { useState, useEffect } from "react"
import Form from "../components/form"
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import { uploadFileToBlob, getJSONData, overWriteJSON } from '../utils/azureStorage';
import imageCompression from 'browser-image-compression';
import { Button } from "@material-ui/core";

const FullForm = ({title,prefilledData}) => {
    const [controllerData, setControllerData] = useState(() => () => console.error("controll data not set"))
    const [controllerErrors, setControllerErrors] = useState(() => () => console.error("control errors not set"))
    const [reset, setReset] = useState(0)
    const [referenceData, setReferenceData] = useState()

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
        reset: reset
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
        reset: reset
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
                if (Object.keys(referenceData).map((item, index) => (referenceData[item]['paypalID'])).includes(tempID)) {
                    errorSetter(true, 'button', "Button already in use", setError, setHelperText)
                    return
                }
                if (tempPrice.length !== 5) {
                    errorSetter(true, 'button', "Need exactly 5 prices", setError, setHelperText)
                    return
                }
                controllerData('buttonID', tempID)
                controllerData('buttonPrices', tempPrice)
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
        multiline: true
    }
    const pictureFile = {
        validateFunc: async (event, setValue, setError, setHelperText) => {
            const imageFile = event.target.files[0];
            if (imageFile === undefined) {
                console.error("IMAGE IS UNDEFINED on change")
            }
            const options = {
                maxSizeMB: 1,
                maxWidthOrHeight: (1920 / 4)
            }
            try {
                const compressedFile = await imageCompression(imageFile, options);
                controllerData('file', compressedFile)
                errorSetter(false, 'file', `Compression successful  From ${(imageFile.size / 1024).toFixed(1)} KB to ${(compressedFile.size / 1024).toFixed(1)} KB`, setError, setHelperText)
                //alert(`Successful compression. From ${(imageFile.size / 1024 / 1024).toFixed(4)} MB to ${(compressedFile.size / 1024 / 1024).toFixed(4)} MB`)
                setValue(compressedFile)
                //set image value *** must add int
            } catch (error) {
                console.error(error);
                errorSetter(true, 'file', "failed compression", setError, setHelperText)
                alert('Failed Compression')
            }
        },
        type: "file",
        width: 6,
        Wrapper: (props) => <Input {...props}>{props.children}</Input>,
        name: "File",
        controlled: false,
        reset: reset,
        UncontrolledDisplay: ({ item }) => (<Grid><img alt="preview of upload" style={{ width: "150px" }} src={URL.createObjectURL(item)} /></Grid>)
    }

    return (<div>
        <h1>{title}</h1>
        <br />
        <Form
            title="Uploads page"
            items={[
                picNameItem,
                paypalID,
                paypalButton,
                pictureFile
            ]}
        ></Form>
        <Controller
            callBackData={setControllerData}
            callBackErros={setControllerErrors}
            callBackReset={setReset}
            referenceData={referenceData}
            callBackRefData={setReferenceData}/>
    </div>)
}


const Controller = ({ callBackData, callBackErros, callBackReset, referenceData, callBackRefData }) => {
    const [fileSelected, setFileSelected] = useState()
    const [picName, setPicName] = useState('')
    const [paypalId, setPaypalId] = useState('')
    const [paypalButtonId, setPaypalButtonID] = useState()
    const [paypalPrics, setPaypalPrices] = useState()

    const [errors, setErrors] = useState({
        name: 'not set',
        id: 'not set',
        button: 'not set',
        file: 'not set'
    })//name,id,button,file

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
    }, [])


    const uploadFile = async () => {
        if ((errors['name'] || errors['id'] || errors['button'] || errors['file'])) {
            alert("Fix errors or missing data before submitting")
            console.error("Tried to submit with erros: %o", errors)
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
        returnListData['unordered'].unshift(paypalId)
        returnJSONData[paypalId] = {
            "title": picName,
            "prices": paypalPrics,
            "paypalID": paypalButtonId,
            "URL": "https://mjmpictures.blob.core.windows.net/pics/" + fileSelected.name
        }


        await overWriteJSON(returnJSONData, "rawData.json")
        await overWriteJSON(returnListData, "display.json")
        await uploadFileToBlob(fileSelected)
        await getJSONData("rawData.json").then(data => {
            if (data[0]) { callBackRefData(data[1]) }
        })
        setErrors({
            name: 'not set',
            id: 'not set',
            button: 'not set',
            file: 'not set'
        })
        callBackReset(pre => { return pre + 1 })
    }

    return (
        <>
            <Button variant="contained" className="grid-button" onClick={() => { uploadFile() }}>Upload</Button>
        </>)
}


export default FullForm