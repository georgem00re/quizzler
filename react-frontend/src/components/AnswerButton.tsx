
import { useDispatch } from "react-redux";
import { useState } from "react";
import { answerQuestion, correctAnswer, incorrectAnswer } from "../state/actions.ts";
import LetterIcon from "./LetterIcon.tsx";
import CrossSymbol from "./CrossSymbol.tsx";
import TickSymbol from "./TickSymbol.tsx";

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
	const color = answered == false ? "#001133" : correct == true ? DARK_GREEN : DARK_RED;
	const [selected, setSelected] = useState(false);

	const onClick = () => {
		correct ? dispatch(correctAnswer()) : dispatch(incorrectAnswer())
		dispatch(answerQuestion(questionNumber))
		setSelected(true);
	}

	return (
		<button onClick={() => onClick()} style={style} disabled={answered}>
			<LetterIcon index={index} color={color}/>
			{text}
			{ selected ? correct ? <TickSymbol color={DARK_GREEN}/> : <CrossSymbol color={DARK_RED}/> : null}
		</button>
	)
}

const style = {
	fontFamily: "Avenir",
	fontSize: "16px",
	color: "black",
	backgroundColor: "#DEF0F8",
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
