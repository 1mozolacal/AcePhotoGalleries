import React, {useState} from 'react'
import { Button } from '@material-ui/core';
import placeholder from '../images/mountaindawn.jpg'
import Grid from '@material-ui/core/Grid';

import '../stylesheets/spotlight.sass'



const SpotLight = ({ image, selected, callback, title, offSet }) => {

    const holderClass = selected ? "spot-light-holder-show"  : "spot-light-holder"  

    return (
        <div className={holderClass} style={offSet !=0 ? {top: offSet} : undefined}>
            <Grid container className="spot-exit-holder" direction="row" justifycontent="space-around" spacing={0}>
                <Grid item xs={1}>
                <Button  style={{fontWeight: 900}}variant="outlined" color="secondary" className="spot-exit" onClick={callback}>Exit</Button>
                </Grid>
                <Grid item xs={11}> <div style={{textAlign: "center"}}>{title}</div></Grid>
            </Grid>
            <div className="spot-image-boarder">
                {!image && <p className="spot-placeholder-text">THIS IS A PLACEHOLDER IMAGE</p>}
            <img className="spot-image" src={image || placeholder}></img>
            </div>
        </div>
    )
}

export default SpotLight