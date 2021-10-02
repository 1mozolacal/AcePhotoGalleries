import React, { useState, useEffect } from "react";
import { Grid, Switch } from "@material-ui/core";

import { getJSONData, overWriteJSON } from '../utils/azureStorage';
import FullForm from "../components/fullForm"
import Search from "../components/search"

import "../stylesheets/home.sass"


const Editor = (props) => {
    const id = props.id
    var defaultID = undefined
    if (props.location.search !== '') {
        let searchParams = new URLSearchParams(props.location.search)
        defaultID = searchParams.get('id')
    }
    const [refID, setRefID] = useState(defaultID)
    const [referenceData, setReferenceData] = useState()
    const [override, setOverride] = useState(false)

    useEffect(() => {
        async function makeFetch() {
            await getJSONData("rawData.json").then((data) => {
                setReferenceData(data[1])
            })
        }
        makeFetch()
    }, [])

    // NNNEEEED to change the submit func of the fullform component (has to be different the uploads page)

    return (
        <div>
            <div style={{position:'absolute',right:'0px', color: "black"}}>
                Override:
            <Switch
                checked={override}
                onChange={() => setOverride(!override)}
                inputProps={{ 'aria-label': 'controlled' }}
            />
            </div>
            {referenceData &&
                (refID &&
                    <FullForm
                        title="Editor"
                        items={{ button: true, pic: true, title: true }}
                        override={override}
                        preData={{
                            title: referenceData[refID]['title'],
                            id: refID,
                            pic: referenceData[refID]['URL'],
                            button: createFullButton(referenceData[refID]['paypalID'], referenceData[refID]['prices'])
                        }}
                    />
                    || <Search
                        lookupAgainst={referenceData}
                        callBack={(id) => setRefID(id)} />)
                || <div>Loading data</div>}
        </div>
    )
}


const createFullButton = (id, prices) => {

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
</select> </td></tr></form>`
}


export default Editor