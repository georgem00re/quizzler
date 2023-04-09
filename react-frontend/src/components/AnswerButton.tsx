
interface AnswerButtonProps {
	text: string
}

export default function AnswerButton(props) {
	return <button class="button is-dark">{props.text}</button>
}