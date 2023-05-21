
export default function AnswerContainer(props) {
	return <div style={style}>{props.children}</div>
}

const style = {
	display: "flex",
	flexWrap: "wrap",
	flexDirection: "row",
	boxSizing: "border-box",
	padding: "5px 0px 5px 0px",
	width: "100%",
	justifyContent: "center",
	alignItems: "center"
}