import React from "react";

import InfoCard from "../components/InfoCard";
import SideBar from "../components/Sidebar";

// Material ui
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const gallery = () => {
  return (
    <>
      <SideBar activeTab={2}/>
      <div
        className="lg-text bold-text cyan-text"
        style={{ width: "100%", textAlign: "center" }}
      >
        Gallery
      </div>
      <br />
      {[0, 1, 2, 3].map((x) => (
        <Grid
          key={x}
          container
          spacing={4}
          justify="center"
          style={{ padding: "10px 20px" }}
        >
          <Grid item xs={12} lg={x % 2 === 0 ? 4 : 6}>
            <InfoCard />
          </Grid>
          <Grid item xs={12} lg={x % 2 === 0 ? 6 : 4}>
            <InfoCard />
          </Grid>
        </Grid>
      ))}
      <br />
      <Grid container justify="center">
        <Grid item xs={12} md={6}>
          <Button
            variant="contained"
            style={{ backgroundColor: "#D6FFF6", width: "100%" }}
          >
            Load more
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default gallery;
