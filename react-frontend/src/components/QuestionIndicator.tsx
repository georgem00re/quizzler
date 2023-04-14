
interface QuestionIndicatorProps {
	questionNumber: number
}

export default function QuestionIndicator(props: QuestionIndicatorProps) {
	return <h1>{props.questionNumber}</h1>
}