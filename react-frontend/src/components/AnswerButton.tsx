
import { useDispatch } from "react-redux";
import { nextQuestion, correctAnswer, incorrectAnswer } from "../state/actions.ts";

interface AnswerButtonProps {
	text: string,
	correct: bool
}

export default function AnswerButton(props) {

	const dispatch = useDispatch();

	const onClick = () => {
		props.correct ? dispatch(correctAnswer()) : dispatch(incorrectAnswer())
		dispatch(nextQuestion())
	}

	return <button onClick={() => onClick()} class="button is-dark m-2">{props.text}</button>
}