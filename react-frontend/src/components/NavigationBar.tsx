
import HelpButton from "./HelpButton.tsx";
import Logo from "./Logo.tsx";
import SettingsButton from "./SettingsButton.tsx";

export default function NavigationBar() {
	return (
		<div style={style} class="has-background-light">
			<Logo width="40px"/>
			<h1 style={header}>quizzler.io</h1>
			<span style={{ display: "flex", marginRight: "20px", justifyContent: "center", alignItems: "center" }}>
				<HelpButton/>
				<SettingsButton/>
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
	flexDirection: "row"
}

const header = {
	fontFamily: "Avenir Heavy",
	fontSize: "35px",
	color: "#212121",
	margin: "0px"
}