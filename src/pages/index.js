import * as React from "react";
import Sidebar from "../components/Sidebar";

// Material ui import
import Grid from "@material-ui/core/Grid";

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
      <Grid container spacing={1} alignItems="center" justify="center">
        <Grid item lg={1} />
        <Grid item lg={3}>
          <div className="home-context">
            <div className="lg-text cyan-text bold-text">
              MELANIE <br />
              JANISSE-BARLOW{" "}
            </div>
            <div className="md-text blue-text bold-text">
              Painting and projects
            </div>
            <hr
              style={{ height: 3, backgroundColor: "#4DCCBD", border: "none" }}
            />
            <div className="lg-text light-cyan-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </div>
        </Grid>
        <Grid item lg={7}>
          <Photographer style={{ width: "100%" }} className="photographer" />
          <Camera style={{ width: "100%" }} className="camera" />
        </Grid>
        <Grid item lg={1} />
      </Grid>
    </main>
  );
};

export default IndexPage;
