import * as React from "react";
import Sidebar from "../components/Sidebar";

// Material ui import
import Grid from "@material-ui/core/Grid";

import featuredImage from '../images/gallery/THE FAMOUS MOULIN ROUGE IN DOWNTOWN PARIS FRANCE UNREAL SITE.jpg'
import logo from '../images/tempLogo.png'
// SVG
import Photographer from "../images/photographer.svg";
import Camera from "../images/camera.svg";
import "../stylesheets/index.sass";
import "../stylesheets/home.sass";
// markup
const IndexPage = () => {
  return (
    <main>
      <Sidebar activeTab={0} />
      <Grid container spacing={2} alignItems="center" justify="center" direction="row">
        <Grid item lg={3}>
          <div className="home-context">
            <div className="logo-holder">
              <img className="logo" src={logo}></img>
            </div>
            <div className="lg-text cyan-text bold-text">            
              MICHAEL J. MAJOR
            </div>
            <div className="md-text blue-text bold-text">
              Professional Photographer 
            </div>
            <hr
              style={{ height: 3, backgroundColor: "#4DCCBD", border: "none" }}
            />
            <div className="lg-text light-cyan-text">
              Specializing primarily in nature,architecture, and outdoor photography.
            </div>
          </div>
        </Grid>
        <Grid item lg={1}></Grid>
        <Grid item lg={7}>
          <img className="featured" src={featuredImage} alt="Featured image"></img>
        </Grid>
      </Grid>
    </main>
  );
};

export default IndexPage;
