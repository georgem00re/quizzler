
import { useSelector } from "react-redux";
import { SPACE_GREY, WHITE } from "../../constants/colours.js";
import { useState, useEffect } from "react";
import moment from "moment";

export default function Timer() {

	const lightTheme = useSelector(state => state.lightTheme)
	const textColor = lightTheme ? SPACE_GREY : WHITE
	const [time, setTime] = useState("??:??:??");

	useEffect(() => {
		const interval = setInterval(() => updateTimer(), 1000);
  		return () => {
    		clearInterval(interval);
    	}
	})

	const updateTimer = () => {	
		let nextMidnight = new Date();
		nextMidnight.setHours(24,0,0,0);
		let now = new Date();
		let remainingTimeInSeconds = (nextMidnight.getTime() - now.getTime())/1000;
		var date = new Date();
		date.setSeconds(remainingTimeInSeconds);
		var hhmmssFormat = date.toISOString().substr(11, 8);
		setTime(hhmmssFormat);
	}

	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", fontFamily: "Avenir Light", color: textColor, margin: "10px" }}>
			<h2>Time until next quiz:</h2>
			<h1 style={{...style, color: textColor}}>{time}</h1>
		</div>
	)
}

const style = {
	fontFamily: "Avenir Black",
	fontSize: "30px",
	textAlign: "center",
	margin: "0px",
}