import * as React from "react";
import Sidebar from "../components/Sidebar";
import Grid from "@material-ui/core/Grid";

import placeholder from "../images/genericProfile.png";
import "../stylesheets/bio.sass";
import "../stylesheets/index.sass";
import "../stylesheets/home.sass";

// markup
const BioPage = () => {
  return (
    <main>
      <Sidebar />
      <div style={{ padding: "20px" }}>
        <Grid container direction="row" spacing={2}>
          <Grid item xs={12} sm={6}>
            <img className="circle" src={placeholder}></img>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className="home-context">
              <div className="lg-text cyan-text bold-text">
                MELANIE <br />
                JANISSE-BARLOW{" "}
              </div>
              <div className="md-text blue-text bold-text">
                Painting and projects
              </div>
              <hr
                style={{
                  height: 3,
                  backgroundColor: "#4DCCBD",
                  border: "none",
                }}
              />
              <div className="lg-text light-cyan-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="lg-text light-cyan-text textpad">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </Grid>
        </Grid>
      </div>
    </main>
  );
};

export default BioPage;
