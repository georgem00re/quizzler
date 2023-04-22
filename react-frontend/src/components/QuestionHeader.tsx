
interface QuestionHeaderProps {
	text: string
}

export default function QuestionHeader(props: QuestionHeaderProps) {
	return <h1 style={styles}>{props.text}</h1>
}

const styles = {
	fontSize: 20,
	fontFamily: "Avenir Book",
	width: "450px",
	margin: "10px",
}