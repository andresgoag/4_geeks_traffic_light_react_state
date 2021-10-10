import React from "react";

import { TrafficLight } from "./trafficLight.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="main-container">
			<TrafficLight />
		</div>
	);
};

export default Home;
