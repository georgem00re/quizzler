
interface QuestionIndicatorProps {
	text: number
}

export default function QuestionIndicator(props: QuestionIndicatorProps) {
	return <h1 class="title is-4">{props.text}</h1>
}