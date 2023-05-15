
export default function QuestionFooter({ correctAnswer, answered}) {

	const text = answered == true ? `Correct Answer: ${correctAnswer}` : "Select from the options above."

	return (
		<div style={style}>{text}</div>
	)
}

const style = {
	fontSize: 16,
	fontFamily: "Avenir",
	width: "100%",
	borderStyle: "solid",
	borderWidth: "1px",
	borderColor: "#CFCFCF",
	borderRadius: "5px",
	padding: "5px",
	paddingLeft: "10px",
	backgroundColor: "#EFEFEF",
	color: "black",
}