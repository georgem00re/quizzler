
import { useSelector } from "react-redux";
import { WHITE, SPACE_GREY, LIGHT_GREY, BORDER_GREY, GREY } from "../../constants/colours.js";

export default function QuestionFooter({ correctAnswer, answered}) {

	const lightTheme = useSelector(state => state.lightTheme);
	const text = answered == true ? `Correct Answer: ${correctAnswer}` : "Select from the options above."
	const backgroundColor = lightTheme ? LIGHT_GREY : SPACE_GREY;
	const textColor = lightTheme ? SPACE_GREY : WHITE;
	const borderColor = lightTheme ? BORDER_GREY : GREY;

	return (
		<div style={{...style, backgroundColor, color: textColor, borderColor}}>{text}</div>
	)
}

const style = {
	fontSize: 16,
	fontFamily: "Avenir",
	width: "100%",
	borderStyle: "solid",
	borderWidth: "1px",
	borderColor: "#CFCFCF",
	borderRadius: "5px",
	padding: "5px",
	paddingLeft: "10px",
	color: "black",
}