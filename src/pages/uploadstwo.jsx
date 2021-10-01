import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import { getJSONData, overWriteJSON } from '../utils/azureStorage';
import FullForm from "../components/fullForm"
import Search from "../components/search"

import "../stylesheets/home.sass"


const Editor = (props) => {    

    return(
        <div>
            {
            <FullForm
            title="Uploadsw"/>
            }
        </div>
    )
}


export default Editor