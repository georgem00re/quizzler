
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export default function LetterIcon(props) {
	return (
		<div style={{...style, backgroundColor: props.color}}>
			{letters[props.index]}
		</div>
	)
}

const style = {
	height: "30px",
	width: "30px",
	borderRadius: "5px",
	color: "white",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	marginRight: "10px",
	fontFamily: "Avenir Black",
}