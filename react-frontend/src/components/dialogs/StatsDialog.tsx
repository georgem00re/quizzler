
import { useDispatch, useSelector } from "react-redux";
import { closeStatsDialog } from "../../state/actions.ts";
import StatsCell from "../misc/StatsCell.tsx";
import ShareButton from "../buttons/ShareButton.tsx";
import { WHITE, SPACE_GREY } from "../../constants/colours.js";
import LineDivider from "../misc/LineDivider.tsx";
import Timer from "../misc/Timer.tsx";
import ScoreLabel from "../misc/ScoreLabel.tsx";

export default function HelpDialog() {

	const dispatch = useDispatch();
	const isActive = useSelector(state => state.statsDialogOpen);
	const className = isActive ? "modal is-active" : "modal";
	const lightTheme = useSelector(state => state.lightTheme);
	const backgroundColor = lightTheme ? WHITE : SPACE_GREY;
	const textColor = lightTheme ? SPACE_GREY : WHITE;
	
	const dismiss = () => {
		dispatch(closeStatsDialog())
	}

	return (
		<div class={className}>
			<div class="modal-background" style={modalBackground}>
				<div class="modal-content" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
					<div class="box" style={{ width: "fit-content", backgroundColor }}>
						<div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
							<h1 style={{ fontFamily: "Avenir Heavy", color: textColor, fontSize: "20px" }}>Statistics</h1>
							<button onClick={dismiss} class="delete" aria-label="close"></button>
						</div>
						<div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "row" }}>
							<StatsCell value={10} title={"Games #"}/>
							<StatsCell value={10} title={"Questions #"}/>
							<StatsCell value={10} title={"Correct %"}/>
						</div>
						<ScoreLabel/>
						<Timer/>
						<div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
							<ShareButton/>
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