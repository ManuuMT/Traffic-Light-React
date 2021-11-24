//Import React
import React from "react";
import ReactDOM from "react-dom";

//Import Bootstrap
import "bootstrap";

//Styles
import "../styles/index.scss";

//Components
import TrafficLight from "./component/TrafficLight.jsx";

//Render application
ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
