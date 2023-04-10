
interface QuestionHeaderProps {
	text: string
}

export default function QuestionHeader(props: QuestionHeaderProps) {
	return <h1>{props.text}</h1>
}