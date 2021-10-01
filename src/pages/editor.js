import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import { getJSONData, overWriteJSON } from '../utils/azureStorage';
import FullForm from "../components/fullForm"
import Search from "../components/search"

import "../stylesheets/home.sass"


const Editor = (props) => {
    const id = props.id
    var defaultID = undefined
    if(props.location.search !== ''){
        let searchParams = new URLSearchParams(props.location.search)
        defaultID = searchParams.get('id')
    }
    const [refID,setRefID] = useState(defaultID)
    const [referenceData,setReferenceData] = useState()

    useEffect(() => {
        async function makeFetch() {
            await getJSONData("rawData.json").then((data) => {
                setReferenceData(data[1])
            })
        }
        makeFetch()
    }, [])

    // NNNEEEED to change the submit func of the fullform component (has to be different the uploads page)

    return(
        <div>
            { refID && 
            <FullForm
            title="Editor"
            preTitle={referenceData[refID]['title']}
            prePaypalID={refID}
            prePic={referenceData[refID]['URL']}
            preButton={createFullButton(referenceData[refID]['paypalID'],referenceData[refID]['prices'])}/>
            || <Search
            lookupAgainst={referenceData}
            callBack={(id) => setRefID(id)}/>}
        </div>
    )
}


const createFullButton = (id,prices) => {

    return `<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="${id}">
<table>
<tr><td><input type="hidden" name="on0" value="Sizes (inches)">Sizes (inches)</td></tr><tr><td><select name="os0">
	<option value="8X10">8X10 ${prices[0]} CAD</option>
	<option value="11X14">11X14 ${prices[1]} CAD</option>
	<option value="16X20">16X20 ${prices[2]} CAD</option>
	<option value="20X24">20X24 ${prices[3]} CAD</option>
	<option value="20X30">20X30 ${prices[4]} CAD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="CAD">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>`
}


export default Editor