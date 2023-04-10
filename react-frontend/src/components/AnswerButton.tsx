
import { useDispatch } from "react-redux";
import { nextQuestion } from "../state/actions.ts";

interface AnswerButtonProps {
	text: string
}

export default function AnswerButton(props) {

	const dispatch = useDispatch();

	const onClick = () => {
		dispatch(nextQuestion())
	}

	return <button onClick={() => onClick()} class="button is-dark m-2">{props.text}</button>
}