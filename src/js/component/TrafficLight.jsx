import React, { useState } from "react";

const TrafficLight = () => {
	const [colour, setColour] = useState("");
	const changeColour = myColour => {
		setColour(myColour);
	};

	// Every light it is a button
	// The onClick function changes the state of the component
	// The ternary operator adds the class that put the lights ON
	return (
		<div className="lights">
			<button
				onClick={() => changeColour("red")}
				className={
					"red" + (colour == "red" ? " red-ON " : "")
				}></button>
			<button
				onClick={() => changeColour("yellow")}
				className={
					"yellow" + (colour == "yellow" ? " yellow-ON " : "")
				}></button>
			<button
				onClick={() => changeColour("green")}
				className={
					"green" + (colour == "green" ? " green-ON " : "")
				}></button>
		</div>
	);
};

export default TrafficLight;
