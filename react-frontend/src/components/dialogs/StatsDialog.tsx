
import { useDispatch, useSelector } from "react-redux";
import { closeStatsDialog } from "../../state/actions.ts";

export default function HelpDialog() {

	const dispatch = useDispatch();
	const isActive = useSelector(state => state.statsDialogOpen);
	const className = isActive ? "modal is-active" : "modal";
	
	const dismiss = () => {
		dispatch(closeStatsDialog())
	}

	return (
		<div class={className}>
			<div class="modal-background" style={modalBackground}>
				<div class="modal-content">
					<div class="box">
						<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
							<h1 style={{ fontFamily: "Avenir Heavy", color: "#212121", fontSize: "20px" }}>Results</h1>
							<button onClick={dismiss} class="delete" aria-label="close"></button>
						</div>
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