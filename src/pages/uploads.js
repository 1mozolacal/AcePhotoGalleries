import React, { useState } from "react";
import FullForm from "../components/fullForm"
import AdminNavbar from "../components/AdminNavbar";
import AuthToken from "../components/authToken";

import "../stylesheets/home.sass"


const Editor = (props) => {

    const [listOfDatReference, setListOfDatReference] = useState()
    const [token, setToken] = useState()

    const callBackOnSubmit = (payload) => {
        const { listData } = payload
        setListOfDatReference(listData)
    }

    return (
        <div>
            {!token &&
                <AuthToken returnToken={setToken} />}

            {token && <>
                <AdminNavbar />
                {
                    <FullForm
                        title="Uploads"
                        items={{ id: true, button: true, pic: true, title: true }}
                        preData={{}}
                        onSubmit={callBackOnSubmit}
                        token={token}
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
            </>}

        </div>
    )
}


export default Editor