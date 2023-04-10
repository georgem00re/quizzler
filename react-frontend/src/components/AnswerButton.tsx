
interface AnswerButtonProps {
	text: string
}

export default function AnswerButton(props) {
	return <button class="button is-dark m-2">{props.text}</button>
}