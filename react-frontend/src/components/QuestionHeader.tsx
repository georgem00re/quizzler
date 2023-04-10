
interface QuestionHeaderProps {
	text: string
}

export default function QuestionHeader(props: QuestionHeaderProps) {
	return <h1 class="title is-6">{props.text}</h1>
}