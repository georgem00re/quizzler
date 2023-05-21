
import { useSelector } from "react-redux";
import { GREY, BORDER_GREY } from "../../constants/colours.js";

export default function LineDivider() {
	const lightTheme = useSelector(state => state.lightTheme);
	const color = lightTheme ? BORDER_GREY : GREY;

	return <hr class="dotted" style={{ backgroundColor: color, marginTop: "3px", marginBottom: "3px", borderTop: `1px solid ${color}` }}/>
}