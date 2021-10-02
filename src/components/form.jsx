import React, { useState, useEffect } from "react";
import Container from '@material-ui/core/Container'

import "../stylesheets/home.sass"
import { Grid } from "@material-ui/core";


const Form = (props) => {

    return (<Container>
        <Grid container className="upload-form" spacing={3}>
            {props.items && props.items.map((ele, index) => { return (<FormItem key={index} {...ele} />) })}

        </Grid>
        <br />
    </Container>)
}



const FormItem = ({ validateFunc, type, width, Wrapper, name, controlled, initalValue, UncontrolledDisplay, reset, multiline }) => {
    const [error, setError] = useState(false)
    const [helperText, setHelperText] = useState('')
    const [value, setValue] = useState(initalValue ? initalValue : '')
    const [firstRender, setFirstRender] = useState(true)
    
    useEffect(() => {
        if (firstRender) {
            setFirstRender(false)
            return
        }
        setValue('')
        setError(false)
        setHelperText('')
    }, [reset])

    return (<>
        <Grid item xs={12} lg={width}>
            <Wrapper
                label={name}
                type={type}
                multiline={multiline}
                error={controlled ? error : undefined}
                helperText={controlled ? helperText : undefined}//raise error that value being pass to dom component
                value={controlled ? value : undefined}
                onChange={(e) => validateFunc(e, setValue, setError, setHelperText)}
                fullWidth
            />
            {!controlled && helperText && <div style={{ color: "black" }}>{helperText}</div>}
        </Grid>
        {!controlled && UncontrolledDisplay !== undefined && value && <UncontrolledDisplay item={value} />}
    </>)
}

export default Form;