
import { useSelector } from "react-redux";
import { SPACE_GREY, WHITE } from "../../constants/colours.js";

export default function Timer() {

	const lightTheme = useSelector(state => state.lightTheme)
	const textColor = lightTheme ? SPACE_GREY : WHITE

	return (
		<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", fontFamily: "Avenir Light", color: textColor, margin: "10px" }}>
			<h2>Time until next quiz:</h2>
			<h1 style={{...style, color: textColor}}>00:00</h1>
		</div>
	)
}

const style = {
	fontFamily: "Avenir Black",
	fontSize: "30px",
	textAlign: "center",
	margin: "0px",
}