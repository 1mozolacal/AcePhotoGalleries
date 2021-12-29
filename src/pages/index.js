import React from "react";
import Sidebar from "../components/Sidebar";
import SEO from "../components/SEO"

// Material ui import
import Grid from "@material-ui/core/Grid";
import Grow from '@material-ui/core/Grow'
import Slide from '@material-ui/core/Slide';

//import featuredImage from '../images/gallery/THE FAMOUS MOULIN ROUGE IN DOWNTOWN PARIS FRANCE UNREAL SITE.jpg'
import logo from '../images/tempLogo.png'
// SVG
import "../stylesheets/index.sass";
import "../stylesheets/home.sass";
import Button from "@material-ui/core/Button";
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';


import { Link } from 'gatsby';

// markup
const IndexPage = () => {

  return (
    <>
    <SEO
      title='Home'
      keywords={['photo','gallery','galleries','ace','micheal major','nature','architechture','outdoor','pictures','ace photo galleries','ace photo gallery','ace photos','ace photo']}
    />
    <main>
      <Sidebar activeTab={0} />
      <Grid container spacing={2} alignItems="center" justifyContent="center" direction="row">
        <Grid item lg={3}>
          <div className="home-context">
            <Slide in={true} timeout={1000}>
              <div className="logo-holder">
                <img alt="logo" className="logo" src={logo}></img>
              </div>
            </Slide>
            <Slide in={true} direction="right" timeout={1000}>
              <div>
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
                  Specializing primarily in nature, architecture, and outdoor photography.
                </div>

                <Button component={Link} to={"/gallery"} variant="contained" className="grid-button"
                  startIcon={<PhotoLibraryIcon />}>
                  View my gallery
                </Button>

              </div>
            </Slide>
          </div>
        </Grid>
        <Grid item lg={1}></Grid>
        <Grid item lg={7}>
          <Grow in={true} timeout={1000}>
            <div>
              <img className="featured" src={"https://mjmpictures.blob.core.windows.net/pics/THE FAMOUS MOULIN ROUGE IN DOWNTOWN PARIS FRANCE UNREAL SITE.jpg"} alt="Featured item"></img>
            </div>
          </Grow>
        </Grid>
      </Grid>
    </main>
    </>
  );
};

export default IndexPage;
