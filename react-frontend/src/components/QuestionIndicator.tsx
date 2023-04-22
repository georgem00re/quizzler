
interface QuestionIndicatorProps {
	number: number,
	maximum: number,
}

export default function QuestionIndicator(props: QuestionIndicatorProps) {
	return <h1 style={style}>Question <span style={{ fontFamily: "Avenir Black"}}>{props.number}</span>/{props.maximum}</h1>
}

const style = {
	fontFamily: "Avenir",
	color: "#212121",
	fontSize: "28px",
	margin: "10px",
}