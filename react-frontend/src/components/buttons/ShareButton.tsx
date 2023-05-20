
import { BsShareFill } from "react-icons/bs";

export default function ShareButton(props) {
	return (
		<button class="button is-success" style={style}>
			<span style={{ marginRight: "5px" }}>Share</span>
			<BsShareFill color="white" style={{ marginLeft: "5px" }}/>
		</button>
	)
}

const style = {
	backgroundColor: "#618C55",
	fontFamily: "Avenir Heavy",
	display: "flex",
	justifyContent: "space-between",
	alignItems: "center",
	flexDirection: "row",
	paddingLeft: "20px",
	paddingRight: "20px",
	borderRadius: "5px",
	marginTop: "10px",
}