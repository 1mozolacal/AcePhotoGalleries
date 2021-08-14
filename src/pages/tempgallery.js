// import React, { useState, useEffect } from 'react'

// import InfoCard from "../components/InfoCard";
// import SideBar from "../components/Sidebar";
// import SpotLight from "../components/SpotLight";
// import PaypalBtn from '../components/PaypalBtn';

// // Material ui
// import Grid from "@material-ui/core/Grid";
// import Button from "@material-ui/core/Button";

// // Data

// import imagesData from '../data/images.json';



// const TempGallery = () => {

//     const [displaySettings, setDisplaySettings] = useState([])
//     const [showSpotLight, setShowSpotLight] = useState(false)
//     const [displayImage, setDisplayImage] = useState(undefined)
//     const [imageCount, setImageCount] = useState(2)
//     const [currentDisplay, setCurrentDisplay] = useState([])

//     const viewImageCallBack = (image) => {
// 		setDisplayImage(image)
// 		setShowSpotLight(true)
// 	}

//     useEffect(() => {
//         let tempData = []
//         for(let i = 0; i < 6; i++) {
//             tempData.push([i+1, `Something ${i}`, 100, 6, undefined, <PaypalBtn value={imagesData[i].value} prices={imagesData[i].data}/>])
//         }
//         setDisplaySettings(tempData)
//         setCurrentDisplay(tempData.slice(0, imageCount))
//     }, [])

// 	return (
// 		<>
// 			<SideBar activeTab={2} />
// 			<SpotLight
// 				selected={showSpotLight}
// 				callback={() => { console.log("render"); setShowSpotLight(false) }}
// 				image={displayImage}
// 			>hello</SpotLight>
// 			<div
// 				className="lg-text bold-text cyan-text"
// 				style={{ width: "100%", textAlign: "center" }}
// 			>
// 				Gallery
// 			</div>
// 			<Grid
// 				container
// 				spacing={4}
// 				justify="center"
// 			>
// 				{currentDisplay ? currentDisplay.map((x) => <Grid
// 						item
// 						key={x[0]}
// 						xs={12}
// 						md={x[3]}
// 					>
// 						<InfoCard
// 							id={x[0]}
// 							name={x[1]}
// 							price={x[2]}
// 							image={x[4]}
// 							paypal={x[5]}
// 							viewCallBack={viewImageCallBack}
// 						/>
// 					</Grid>)
//                     : null }
// 			</Grid>
// 			<br />
// 			<Grid container justify="center">
// 				<Grid item xs={12} md={6}>
// 					<Button
// 						variant="contained"
// 						style={{ backgroundColor: "#D6FFF6", width: "100%" }}
// 						onClick={() => {
// 							let newImageCount = imageCount + 2
// 							setImageCount(newImageCount)
// 							setCurrentDisplay(displaySettings.slice(0, newImageCount))
// 						}}
// 					>
// 						Load more
// 					</Button>
// 				</Grid>
// 			</Grid>
// 		</>
// 	);
// };

// export default TempGallery;