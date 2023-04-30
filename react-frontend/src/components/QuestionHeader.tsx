
export default function QuestionHeader({ text }) {
	return <h1 style={style}>{text}</h1>
}

const style = {
	fontSize: 20,
	fontFamily: "Avenir Heavy",
	width: "450px",
	margin: "10px",
	borderStyle: "solid",
	borderWidth: "1px",
	borderColor: "grey",
	borderRadius: "5px",
	padding: "5px",
	paddingLeft: "10px",
	backgroundColor: "#CAE1ED"
}
