
export default function HelpButton() {
	return <button style={style}>?</button>
}

const style = {
	height: "32px",
	width: "32px",
	backgroundColor: "transparent",
	borderStyle: "solid",
	borderWidth: "3px",
	borderColor: "#212121",
	borderRadius: "50%",
	fontSize: "20px",
	fontFamily: "Avenir Black",
	cursor: "pointer",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	textAlign: "center",
	margin: "5px"
}