
import HelpButton from "../buttons/HelpButton.tsx";
import Logo from "./Logo.tsx";
import StatsButton from "../buttons/StatsButton.tsx";
import ToggleThemeButton from "../buttons/ToggleThemeButton.tsx";
import { SPACE_GREY, WHITE } from "../../constants/colours.js";
import { useSelector } from "react-redux";

export default function NavigationBar() {
	const lightTheme = useSelector(state => state.lightTheme);
	const backgroundColor = lightTheme ? WHITE : SPACE_GREY;
	const textColor = lightTheme ? SPACE_GREY : WHITE;

	return (
		<div style={{...style, backgroundColor }}>
			<Logo width="40px"/>
			<h1 style={{ ...header, color: textColor }}>quizzler</h1>
			<span style={{ display: "flex", marginRight: "20px", justifyContent: "center", alignItems: "center" }}>
				<HelpButton/>
				<StatsButton/>
				<ToggleThemeButton/>
			</span>
		</div>
	)
}

const style = {
	display: "flex",
	padding: "0px",
	width: "100%",
	height: "60px",
	justifyContent: "space-between",
	alignItems: "center",
	borderBottomStyle: "solid",
	borderWidth: "1px",
	borderColor: "#CFCFCF",
	flexDirection: "row",
}

const header = {
	fontFamily: "Avenir Black",
	fontSize: "35px",
	margin: "0px",
}