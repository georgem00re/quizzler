
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
		<button onClick={() => onClick()} class="m-2" style={customStyling}>
			<div style={letter}>{letters[props.index]}</div>
			{props.text}
		</button>
	)
}

const customStyling = {
	fontFamily: "Avenir Heavy",
	fontSize: "18px",
	color: "#212121",
	backgroundColor: "white",
	boxShadow: "3px 3px 3px 1px rgba(110,110,110,0.1)",
	borderRadius: "5px",
	borderStyle: "none",
	paddingTop: "15px",
	paddingBottom: "15px",
	paddingLeft: "15px",
	cursor: "pointer",
	display: "flex",
	justifyContent: "left",
	alignItems: "center"
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