
import { useDispatch } from "react-redux";
import { answerQuestion, correctAnswer, incorrectAnswer } from "../state/actions.ts";
import LetterIcon from "./LetterIcon.tsx";

interface AnswerButtonProps {
	text: string,
	correct: bool,
	index: number,
	answered: bool,
}

export default function AnswerButton({ text, correct, index, answered, questionNumber }) {

	const dispatch = useDispatch();
	const color = answered == false ? "#001133" : correct == true ? "green" : "#83180F";

	const onClick = () => {
		correct ? dispatch(correctAnswer()) : dispatch(incorrectAnswer())
		dispatch(answerQuestion(questionNumber))
	}

	return (
		<button onClick={() => onClick()} style={style} disabled={answered}>
			<LetterIcon index={index} color={color}/>
			{text}
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
