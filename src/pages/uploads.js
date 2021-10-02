import React, { useState } from "react";
import FullForm from "../components/fullForm"
import AdminNavbar from "../components/AdminNavbar";

import "../stylesheets/home.sass"


const Editor = (props) => {

    const [listOfDatReference,setListOfDatReference] = useState()

    const callBackOnSubmit = (payload) =>{
        const {listData} = payload
        setListOfDatReference(listData)
    }

    return (
        <div>
            <AdminNavbar />
            {
                <FullForm
                    title="Uploads"
                    items={{ id: true, button: true, pic: true, title: true }}
                    preData={{}}
                    onSubmit={callBackOnSubmit}
                />
            }
            <div>
                <h3>Unordered list (top 5)</h3>
                <ul>
                    {(listOfDatReference && listOfDatReference['unordered'].map((ele, index) => {
                        if (index >= 5) {
                            return undefined
                        }
                        return (<li>{ele}</li>)
                    }))
                    || <li>Will display after first upload</li>}
                </ul>
            </div>
        </div>
    )
}


export default Editor