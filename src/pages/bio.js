import * as React from "react";

// Material UI components
import Sidebar from "../components/Sidebar";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

// Assets + styling

import "../stylesheets/bio.sass";
import "../stylesheets/index.sass";
import "../stylesheets/home.sass";

// markup

const centerStyling = {
	display: "grid", placeItems: "center"
}

const BioPage = () => {
	return (
		<main>
			<Sidebar activeTab={1} />
			<Container>
				<div style={{ padding: "20px" }}>
					<Grid container direction="row" spacing={2}>
						<Grid item xs={12} sm={6} style={centerStyling}>
							<div className="avatar"/>
						</Grid>
						<Grid item xs={12} sm={6} style={centerStyling}>
							<div>

								<div className="lg-text cyan-text bold-text"> MICHAEL J. MAJOR </div>

								<div className="md-text blue-text bold-text"> Professional Photographer </div>
								<hr
									style={{
										height: 3,
										backgroundColor: "#4DCCBD",
										border: "none",
									}}
								/>
								<p className="md-text light-cyan-text">
								My name is Michael J. Major. I was raised in Windsor, ON and currently reside in Cambridge, ON with my three adult sons. 
								I am a Professionally Trained Photographer specializing in Nature, Architecture and the Outdoors. 
								My training came from my obtainment of my Honours B.A. in Communications from The University as well as during my pursuit 
								of my Masters of Journalism from the University of Western Ontario. I offer my prints in a variety of mediums such as 
								silk paper, metal, acrylic and stretched canvas in a variety of sizes shipped directly to you. My pictures are an eclectic 
								collection from around the world as I am a World traveler. I also do Customer orders so please ask me. Stock is updated weekly!  
								</p>
							</div>
						</Grid>
					</Grid>
					<br/>
					<iframe 
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d92761.15094916883!2d-80.40262743431548!3d43.402402801605476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b89b820e46c19%3A0x5037b28c7231d70!2sCambridge%2C%20ON!5e0!3m2!1sen!2sca!4v1627610323420!5m2!1sen!2sca" 
						width="100%" 
						height="450" style={{border:0}} 
						allowFullScreen="" 
						loading="lazy" 
						title="map-loc"
						/>
				</div>
			</Container>
		</main>
	);
};

export default BioPage;
