import React, { useEffect, useState } from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'
import { TextField } from '@material-ui/core'
import { Grid, Button } from '@material-ui/core'
import { uploadNewJsonFile } from '../utils/azureStorage'


const Display = ({ alwaysShow, tokenName, testToken, returnToken }) => {
    const [input, setInput] = useState()
    const [cookies, setCookies] = useCookies([tokenName])
    const [testResult, setTestResult] = useState(["primary", "Test your token"])


    //set up hook to only trigger once
    useEffect(() => {
        if (cookies[tokenName] && returnToken) {
            returnToken(cookies[tokenName])
        }
    }, [cookies])


    const setTokenDisplay = <Grid container style={{
        backgroundColor: "white",
        color: "black",
        borderRadius: "10px",
        padding: "10px"
    }}>
        {!cookies[tokenName] && "Your Authentication is not set up. Please enter your token."}
        {cookies[tokenName] && "Your token has been entered, feel free to re-enter it if you are switching to a newer one."}
        <Grid item xs={12} lg={10}>
            <TextField multiline fullWidth id='token' label='Paste token here' onChange={(e) => {
                setInput(e.target.value)
                
            }} />
        </Grid>
        <Grid item xs={12} lg={2}>
            <Button variant='contained' onClick={(e) => {
                setCookies(tokenName, input,{path: "/",maxAge: (60*60*24*365)*5 })
                if (returnToken) {
                    returnToken(e.target.value)
                }
            }
            }>Submit Authentication Token</Button>
        </Grid>
        {"token is: " + cookies?.mjmazureauthtoken }
    </Grid>

    return <div>
        {(alwaysShow || !cookies[tokenName]) && setTokenDisplay}
        {testToken &&
            <Button
                variant='contained'
                onClick={(e) => testToken(cookies[tokenName], setTestResult)}
                color={testResult[0]}
            >{testResult[1]}</Button>}
    </div>
}


const AuthToken = (props) => {

    const testToken = async (token, setter) => {
        let res = await uploadNewJsonFile({ test: 'this is  atester' }, 'test.json', token)
        if (res && res._response.status >= 200 && res._response.status < 300) {
            setter(["primary", "token verified"])
        } else {
            setter(["secondary", "token failed."])
        }
    }

    const tokenName = props.name || "mjmazureauthtoken"

    return (<CookiesProvider>
        {<Display
            testToken={props.test ? testToken : undefined}
            tokenName={tokenName}
            {...props} />}
    </CookiesProvider>
    )
}

export default AuthToken