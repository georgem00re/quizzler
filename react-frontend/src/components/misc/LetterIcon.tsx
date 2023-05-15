
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
import { useSelector } from "react-redux";
import { SPACE_GREY, WHITE } from "../../constants/colours.js";

export default function LetterIcon(props) {
	const lightTheme = useSelector(state => state.lightTheme);
	const textColor = lightTheme ? WHITE : SPACE_GREY;
	return (
		<div style={{...style, backgroundColor: props.color, color: textColor}}>
			{letters[props.index]}
		</div>
	)
}

const style = {
	height: "30px",
	width: "30px",
	borderRadius: "5px",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	marginRight: "10px",
	fontFamily: "Avenir Black",
}