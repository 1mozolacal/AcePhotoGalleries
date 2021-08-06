import React, {useState} from 'react'
import placeholder from '../images/mountaindawn.jpg'

import '../stylesheets/spotlight.sass'



const SpotLight = ({ image, selected, callback, title }) => {

    const holderClass = selected ? "spot-light-holder-show"  : "spot-light-holder"  

    return (
        <div className={holderClass}>
            <button onClick={callback}>Exit</button>
            <div className="spot-image-boarder">
            <img className="spot-image" src={image || placeholder}></img>
            </div>
        </div>
    )
}

export default SpotLight