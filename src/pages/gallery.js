import React, { useEffect, useState } from "react";

import InfoCard from "../components/InfoCard";
import SideBar from "../components/Sidebar";
import SpotLight from "../components/SpotLight";
import PaypalBtn from "../components/PaypalBtn";

// Material ui
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

//import { Info } from "@material-ui/icons";
//import { PayPalButton } from "react-paypal-button-v2";
//import pic

import buttonDictionaryMinified from '../data/images.json'

import { displaySettings, imageDictionary } from '../utils/galleryConfigs'


// const tires = {
// 	"1": [75,150,475,650,825],
// 	"3": [150,300,550,725,900],
// 	"3A": [150,300,475,680,840],
// 	"5": [350,500,750,925,1100],
// }

// dictionary of 
/* referenceName : {
	  prices: [length 5],
	  paypalID:  value
}*/



// dictionary for referenceName : picture import


// (refname,width,title)


// (id,title,width,minPrice,maxPrice,imageRef,paybutton)
const displaySettingsVerbose = displaySettings.map((ele, index) => {
	const ref = ele[0]
	const buttonInfo = buttonDictionaryMinified[ref]
	// if (!buttonInfo) {
	// 	console.log("NOT FOUND IN REF: %s", ref)
	// 	return
	// }
	const buttonRender = (<PaypalBtn {...buttonInfo} />)
	const displayImage = imageDictionary[ref]
	const minPrice = buttonInfo["prices"][0]
	const maxPrice = buttonInfo["prices"][4]
	return [index, ele[2], ele[1], minPrice, maxPrice, displayImage, buttonRender]
})

const Gallery = () => {
	const [spotLightInfo, setSpotLightInfo] = useState([false, 0, undefined, undefined]) // [show,yPos,title,image]
	const [imageCount, setImageCount] = useState(10)
	const [currentDisplay, setCurrentDisplay] = useState(displaySettingsVerbose.slice(0, imageCount))
	// console.log(spotLightInfo)
	const navBarShiftFactor = 48
	useEffect(function mount() {
		function onScroll() {
			if (!spotLightInfo[0]) {
				const newInfo = [spotLightInfo[0], window.scrollY, spotLightInfo[2], spotLightInfo[3]]
				setSpotLightInfo(newInfo)
			}
		}
		window.addEventListener('scroll', onScroll);
		return function unMount() {
			window.removeEventListener('scroll', onScroll);
		}
	})

	const viewImageCallBack = (image, title) => {
		console.log('call')
		const newInfo = [true, spotLightInfo[1], title, image]
		setSpotLightInfo(newInfo)
	}

	return (
		<>
			{!spotLightInfo[0] && <SideBar activeTab={2} />}
			<SpotLight
				selected={spotLightInfo[0]}
				callback={() => { const newInfo = [false, spotLightInfo[1], spotLightInfo[2], spotLightInfo[3]]; setSpotLightInfo(newInfo) }}
				image={spotLightInfo[3]}
				offSet={spotLightInfo[1]}
			/>
			<div style={spotLightInfo[0] ? { position: "fixed", top: -(spotLightInfo[1] - navBarShiftFactor) } : undefined}>
				<div
					className="lg-text bold-text cyan-text"
					style={{ width: "100%", textAlign: "center" }}
				>
					Gallery
				</div>
				<Grid
					container
					spacing={2}
					justifyContent="center"
				>
					{currentDisplay.map((x) => { //(id,title,width,minPrice,maxPrice,imageRef,paybutton)
						return (<Grid
							item
							key={x[0]}
							xs={12}
							md={x[2]}
						>
							<InfoCard
								id={x[0]}
								name={x[1]}
								minPrice={x[3]}
								maxPrice={x[4]}
								image={x[5]}
								paypal={x[6]}
								viewCallBack={viewImageCallBack}
							/>
						</Grid>)
					})}
				</Grid>
				<br />
				<Grid container justifyContent="center">
					<Grid item xs={12} md={6}>
						<Button
							variant="contained"
							style={{ backgroundColor: "#D6FFF6", width: "100%" }}
							onClick={() => {
								let newImageCount = imageCount + 10
								setImageCount(newImageCount)
								setCurrentDisplay(displaySettingsVerbose.slice(0, newImageCount))
							}}
						>
							Load more
						</Button>
					</Grid>
				</Grid>
			</div>
		</>
	);
};

export default Gallery;



