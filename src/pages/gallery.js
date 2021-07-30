import React from "react";

import InfoCard from "../components/InfoCard";
import SideBar from "../components/Sidebar";

// Material ui
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { PayPalButton } from "react-paypal-button-v2";

const gallery = () => {
  return (
    <>
      <SideBar activeTab={2} />
      <PayPalButton
        amount="0.01"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);
        }}
        options={{
          clientId:
            "AW9JHrE4PeIw0csa1oc3J6GZJJdWxPcQr8rNbjc4DqpXkn5E1IumPfVEGBhx9dCRK5T7UAt_G5dmhYP7",
          currency: "CAD",
        }}
      />

      <form
        action="https://www.paypal.com/cgi-bin/webscr"
        method="post"
        target="_top"
      >
        <input type="hidden" name="cmd" value="_s-xclick" />
        <input type="hidden" name="hosted_button_id" value="UGT65GGKJ2MS6" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif"
          border="0"
          name="submit"
          alt="PayPal - The safer, easier way to pay online!"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>

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
