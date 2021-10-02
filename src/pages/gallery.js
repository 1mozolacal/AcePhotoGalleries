import React, { useEffect, useState } from "react";

import SideBar from "../components/Sidebar";
import SpotLight from "../components/SpotLight";
import PaypalBtn from "../components/PaypalBtn";
import CardHolder from "../components/cardHolder";

// Material ui
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const Gallery = () => {
	const [displayPicture, setDisplayPicture] = useState()
	const [spotLightInfo, setSpotLightInfo] = useState([false, 0, undefined, undefined]) // [show,yPos,title,image]
	const [imageCount, setImageCount] = useState(10)

	// const navBarShiftFactor = 48

	useEffect(() => {
		async function makeFetch() {
			const list = await fetch("https://mjmpictures.blob.core.windows.net/config/display.json")
				.then(res => res.json())
				.then((data) => {
					var allImage = data['ordered']
					const unorderedMapping = data['unordered'].map((item, index) => {
						const mapping = [4, 8, 8, 4]
						return [item, mapping[index % 4]]
					})
					allImage.push(...unorderedMapping)
					return allImage
					//returns [id,width]
				})
			const data = await fetch("https://mjmpictures.blob.core.windows.net/config/rawData.json")
				.then(res => res.json())
				.then((data) => {
					return data
				})
			const fullListData = list.map(([id, width], index) => {
				if(data[id] === undefined){
					console.error("Can not find %o in Database: %o",id,data)
					return undefined
				}
				const buttonRender = (<PaypalBtn prices={data[id]['prices']} paypalID={data[id]['paypalID']} />)
				return [id, data[id]['title'], width, data[id]['prices'][0], data[id]['prices'][4], data[id]['URL'], buttonRender]
				// return [id, title, width, minPrice, maxPrice, displayImage, buttonRender]
			})
			setDisplayPicture(fullListData)
		}
		makeFetch()
	}, [])

	const viewImageCallBack = (image, title) => {
		const newInfo = [true, spotLightInfo[1], title, image]
		setSpotLightInfo(newInfo)
	}


	return (
		<>
			<SideBar activeTab={2} />
			{displayPicture &&
				(<>
					<SpotLight
						selected={spotLightInfo[0]}
						callback={() => { const newInfo = [false, spotLightInfo[1], spotLightInfo[2], spotLightInfo[3]]; setSpotLightInfo(newInfo) }}
						image={spotLightInfo[3]}
						offSet={spotLightInfo[1]}
					/>
					<div>
						<div
							className="lg-text bold-text cyan-text"
							style={{ width: "100%", textAlign: "center" }}
						>
							Gallery
						</div>
						<br />
						<CardHolder items={displayPicture.slice(0, imageCount)} viewImageCallBack={viewImageCallBack} />

						<br />
						{displayPicture.length >= imageCount ?
							<Grid container justifyContent="center">
								<Grid item xs={12} md={12}>
									<Button
										variant="contained"
										style={{ backgroundColor: "#D6FFF6", width: "100%", height: "8vh" }}
										onClick={() => {
											let newImageCount = imageCount + 10
											setImageCount(newImageCount)
										}}
									>
										Load more
									</Button>
								</Grid>
							</Grid>
							: null}
					</div>
				</>)}
			{!displayPicture && <div>Loading gallery...</div>}
		</>
	);
};

export default Gallery;

// TESTING

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