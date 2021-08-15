import React from 'react'
import { Button } from '@material-ui/core';
import placeholder from '../images/mountaindawn.jpg'
import Grid from '@material-ui/core/Grid';

import '../stylesheets/spotlight.sass'



const SpotLight = ({ image, selected, callback, title}) => {

    const holderClass = selected ? "spot-light-show" : "spot-light-none"


    return (
        <div className={holderClass}>
            <Grid container direction="row" justifyContent="space-around" spacing={0}>
                <Grid item xs={1}>
                    <Button style={{ fontWeight: 900 }} variant="outlined" color="secondary" className="spot-exit" onClick={callback}>Exit</Button>
                </Grid>
                <Grid item xs={11}> <div style={{ textAlign: "center" }}>{title}</div></Grid>
            </Grid>
            <div className="spot-light-content">
                <div className="spot-image-boarder">
                    {!image && <p className="spot-placeholder-text">THIS IS A PLACEHOLDER IMAGE</p>}
                    <img className="spot-image" src={image || placeholder} alt="spotlight" width="100%" height="100%" />
                </div>
            </div>
        </div>
    )
}

export default SpotLight