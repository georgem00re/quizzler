
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { answerQuestion, correctAnswer, incorrectAnswer } from "../../state/actions.ts";
import LetterIcon from "../misc/LetterIcon.tsx";
import { RxCross2 } from "react-icons/rx";
import { FiCheck } from "react-icons/fi";
import { WHITE, SPACE_GREY, LIGHT_GREY } from "../../constants/colours.js";

interface AnswerButtonProps {
	text: string,
	correct: bool,
	index: number,
	answered: bool,
}

const DARK_RED = "#83180F";
const DARK_GREEN = "green"

export default function AnswerButton({ text, correct, index, answered, questionNumber }) {

	const dispatch = useDispatch();
	const lightTheme = useSelector(state => state.lightTheme);
	const color = answered == false ? lightTheme ? SPACE_GREY : WHITE : correct == true ? DARK_GREEN : DARK_RED;
	const backgroundColor = lightTheme ? "WHITE" : SPACE_GREY;
	const [selected, setSelected] = useState(false);

	const onClick = () => {
		correct ? dispatch(correctAnswer()) : dispatch(incorrectAnswer())
		dispatch(answerQuestion(questionNumber))
		setSelected(true);
	}

	return (
		<button onClick={() => onClick()} style={{...style, backgroundColor, color}} disabled={answered}>
			<LetterIcon index={index} color={color}/>
			{text}
			{ selected ? correct ? <FiCheck style={{ marginLeft: "15px" }} color={DARK_GREEN}/> : <RxCross2 style={{ marginLeft: "15px" }} color={DARK_RED}/> : null}
		</button>
	)
}

const style = {
	fontFamily: "Avenir",
	fontSize: "16px",
	borderRadius: "5px",
	borderStyle: "solid",
	borderWidth: "1px",
	borderColor: "#CFCFCF",
	padding: "5px",
	cursor: "pointer",
	margin: "5px 0px 5px 0px",
	display: "flex",
	alignItems: "center",
	boxSizing: "border-box",
	width: "100%",
}
