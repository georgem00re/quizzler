
import { useDispatch, useSelector } from "react-redux";
import LineDivider from "../misc/LineDivider.tsx";
import { closeHelpDialog } from "../../state/actions.ts";

export default function HelpDialog() {

	const dispatch = useDispatch();
	const isActive = useSelector(state => state.helpDialogOpen);
	const className = isActive ? "modal is-active" : "modal";
	
	const dismiss = () => {
		dispatch(closeHelpDialog())
	}

	return (
		<div class={className}>
			<div class="modal-background" style={modalBackground}>
				<div class="modal-content">
					<div class="box">
						<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
							<h1 style={{ fontFamily: "Avenir Heavy", color: "#212121", fontSize: "20px" }}>How to Play</h1>
							<button onClick={dismiss} class="delete" aria-label="close"></button>
						</div>
						<p style={{ marginTop: "10px", marginBottom: "10px", fontFamily: "Avenir" }}>Quizzler provides users with a daily, 5-question quiz. Answer all the questions and share the results with your friends. The quiz is refreshed at midnight.</p>
						<h2 style={{ fontFamily: "Avenir" }}> Created By: <a href="https://github.com/georgem00re">George Moore</a></h2>
						<LineDivider/>
						<h2 style={{ margin: "0px", fontFamily: "Avenir" }}>Question Source: <a href="https://the-trivia-api.com/">the-trivia-api.com</a></h2>
						<LineDivider/>
						<h2 style={{ fontFamily: "Avenir" }}>Source Code: <a href="https://github.com/georgem00re/quizzler.io">github.com/georgem00re/quizzler.io</a></h2>
					</div>
				</div>
			</div>
		</div>
	)
}

const modalBackground = {
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
}