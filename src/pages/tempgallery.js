import React, { useState } from 'react'

import InfoCard from "../components/InfoCard";
import SideBar from "../components/Sidebar";
import SpotLight from "../components/SpotLight";

// Material ui
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const TempGallery = () => {

    const [showSpotLight, setShowSpotLight] = useState(false)
    const [displayImage, setDisplayImage] = useState(undefined)
    const [imageCount, setImageCount] = useState(2)
    const [currentDisplay, setCurrentDisplay] = useState()

    return (
    <>
        <SideBar activeTab={2} />
        <SpotLight
            selected={showSpotLight}
            callback={() => setShowSpotLight(false)}
            image={displayImage}
        >hello</SpotLight>
        <div
            className="lg-text bold-text cyan-text"
            style={{ width: "100%", textAlign: "center" }}
        >
            Gallery
        </div>
        <br />
        <Grid
            container
            spacing={4}
            justify="center"
        >
            {/* {currentDisplay.map((x) => {
                return (<Grid
                    item
                    key={x[0]}
                    xs={12}
                    md={x[3]}
                >
                    <InfoCard
                        id={x[0]}
                        name={x[1]}
                        price={x[2]}
                        image={x[4]}
                        paypal={x[5]}
                    />
                </Grid>)
            })} */}
        </Grid>
        <br />
        <Grid container justify="center">
            <Grid item xs={12} md={6}>
                <Button
                    variant="contained"
                    style={{ backgroundColor: "#D6FFF6", width: "100%" }}
                    onClick={() => {
                        let newImageCount = imageCount + 2
                        setImageCount(newImageCount)
                    }}
                >
                    Load more
                </Button>
            </Grid>
        </Grid>
    </>
    );
}

export default TempGallery;