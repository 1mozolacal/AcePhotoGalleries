import React, { useState, useEffect } from "react";
import { uploadFileToBlob, getJSONData, overWriteJSON } from '../utils/azureStorage';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';

const Tester = () => {
    const [data, setData] = useState()
    const [button, setButton] = useState()

    useEffect(() => {
        async function makeFetch() {
            await getJSONData("number.json").then((data) => {
                setData(data[1]['datum'])
            })
        }
        makeFetch()
    }, [])

    const submit = async () =>{
        var cal = undefined
        // await getJSONData("number.json").then(data => {
        //     if (data[0]) { cal =data[1]['datum'] ; console.log(data) }
        // })
        
        await overWriteJSON({datum:data+button}, "number.json")

        // await getJSONData("number.json").then(data => {
        //     if (data[0]) { setData(data[1]['datum']); console.log(data) }
        // })
        setData(data+button)

        setButton('')
    }


    return (<div>
       <h1>data:{data}</h1>
       <TextField
            label="Picture's name"
            type="text"
            fullWidth
            value={button}
            onChange={(e) => { setButton(e.target.value) }} />
        <button onClick={submit}>submit</button>
    </div>)
}

export default Tester


{/*  */}