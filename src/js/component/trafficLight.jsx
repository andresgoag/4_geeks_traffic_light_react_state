import React from "react";

//

export const TrafficLight = () => {
	const [color, setColor] = React.useState("yellow");

	return (
		<div className="traffic-light">
			<button
				className={`light red ${color == "red" ? "selected" : null}`}
				onClick={() => setColor("red")}></button>
			<button
				className={`light yellow ${
					color == "yellow" ? "selected" : null
				}`}
				onClick={() => setColor("yellow")}></button>
			<button
				className={`light green ${
					color == "green" ? "selected" : null
				}`}
				onClick={() => setColor("green")}></button>
		</div>
	);
};
