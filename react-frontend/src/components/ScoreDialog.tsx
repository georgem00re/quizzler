
import { useSelector } from "react-redux";
import ShareButton from "./ShareButton.tsx";
import ScoreLabel from "./ScoreLabel.tsx";

export default function ScoreDialog({ active, onDismiss}) {

	const score = useSelector(state => state.score);
	const modalClassName = active == true ? "modal is-active" : "modal";

	return (
		<div class={modalClassName}>
			<div class="modal-background"></div>
			<div class="modal-content">
				<div class="container">
					<div class="box">
						<ScoreLabel score={score}/>
						<ShareButton/>
					</div>
				</div>
			</div>
			<button onClick={onDismiss} class="modal-close is-large" aria-label="close"></button>
		</div>
	)
}