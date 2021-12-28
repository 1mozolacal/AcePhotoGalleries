import React, { useState } from 'react'
import { CookiesProvider, useCookies } from 'react-cookie'
import { TextField } from '@material-ui/core'
import { Grid, Button } from '@material-ui/core'

//mjmazureauthtoken


const Display = ({ alwaysShow, tokenName, testToken, returnToken }) => {
    const [input, setInput] = useState()
    const [cookies, setCookies] = useCookies([tokenName])
    const [testResult, setTestResult] = useState(["primary", "Test your token"])

    console.log("Your cookies: %o", cookies)
    if (cookies[tokenName] && returnToken) {
        returnToken(cookies[tokenName])
    }

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
                if (returnToken) {
                    returnToken(e.target.value)
                }
            }} />
        </Grid>
        <Grid item xs={12} lg={2}>
            <Button variant='contained' onClick={(e) => setCookies(tokenName, input)}>Submit Authentication Token</Button>
        </Grid>
    </Grid>

    console.log("show %o", alwaysShow)

    return <div>
        <div>
            {(alwaysShow || !cookies[tokenName]) && setTokenDisplay}
            {testToken &&
                <Button variant='contained' onClick={(e) => {
                    let result = testToken(cookies[tokenName])
                    setTestResult(result)
                }}
                    color={testResult[0]}
                >{testResult[1]}</Button>
            }
        </div>
    </div>
}


const AuthToken = (props) => {

    const testToken = (token) => {
        console.log("Testing the token: %o", token)
        return ["secondary", "test not made yet :("]
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