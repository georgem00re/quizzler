
import { useDispatch } from "react-redux";
import { nextQuestion, correctAnswer, incorrectAnswer } from "../state/actions.ts";

interface AnswerButtonProps {
	text: string,
	correct: bool,
	index: number
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function AnswerButton(props) {

	const dispatch = useDispatch();

	const onClick = () => {
		props.correct ? dispatch(correctAnswer()) : dispatch(incorrectAnswer())
		dispatch(nextQuestion())
	}

	return (
		<button onClick={() => onClick()} class="m-1" style={customStyling}>
			<div style={letter}>{letters[props.index]}</div>
			{props.text}
		</button>
	)
}

const customStyling = {
	fontFamily: "Avenir",
	fontSize: "18px",
	color: "#212121",
	backgroundColor: "white",
	borderRadius: "2px",
	borderStyle: "sold",
	borderWidth: "1px",
	borderColor: "grey",
	padding: "5px",
	cursor: "pointer",
	display: "flex",
	justifyContent: "left",
	alignItems: "center",
	boxSizing: "border-box",
}

const letter = {
	backgroundColor: "rgba(128, 128, 128, 0.1)",
	height: "35px",
	width: "35px",
	borderRadius: "50%",
	color: "#212121",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	marginRight: "40px",
}