
export default function QuestionHeader({ text }) {
	return <h1 style={style}>{text}</h1>
}

const style = {
	fontSize: 18,
	fontFamily: "Avenir Heavy",
	width: "100%",
	borderStyle: "solid",
	borderWidth: "1px",
	borderColor: "#CFCFCF",
	borderRadius: "5px",
	padding: "5px",
	paddingLeft: "10px",
	backgroundColor: "#CAE1ED",
	color: "black",
}
