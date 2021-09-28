import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import FullForm from "../components/fullForm"

import "../stylesheets/home.sass"


const Editor = (props) => {
    const id = props.id
    var defaultID = undefined
    console.log("CALVINN %o",props.location)
    if(props.location.search !== ''){
        let searchParams = new URLSearchParams(props.location.search)
        defaultID = searchParams.get('id')
    }
    const [refID,setRefID] = useState(defaultID)

    
    return(
        <div>
            <FullForm
            title="Editor"/>
        </div>
    )
}

export default Editor