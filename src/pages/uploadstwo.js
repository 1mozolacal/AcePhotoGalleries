import React from "react";
import FullForm from "../components/fullForm"

import "../stylesheets/home.sass"


const Editor = (props) => {    

    return(
        <div>
            {
            <FullForm
            title="Uploadsw"
            items={{id:true,button:true,pic:true,title:true}}
            preData={{}}
            />
            }
        </div>
    )
}


export default Editor