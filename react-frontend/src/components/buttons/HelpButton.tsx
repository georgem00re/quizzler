
import { IoIosHelpCircle } from "react-icons/io";
import { openHelpDialog } from "../../state/actions.ts";
import { useDispatch, useSelector } from "react-redux";
import { SPACE_GREY, WHITE } from "../../constants/colours.js";

export const TEST_ID_HELP_BUTTON = "help-button";

export default function HelpButton() {
	const dispatch = useDispatch();
	const lightTheme = useSelector(state => state.lightTheme);
	const color = lightTheme ? SPACE_GREY : WHITE;
	
	return (
		<button data-testid={TEST_ID_HELP_BUTTON} style={style} onClick={() => dispatch(openHelpDialog())}>
			<IoIosHelpCircle color={color} size="35px"/>
		</button>
	)
}

const style = {
	height: "fit-content",
	width: "fit-content",
	backgroundColor: "transparent",
	borderStyle: "none",
	cursor: "pointer",
	display: "flex",
	padding: "0px",
	margin: "5px"
}