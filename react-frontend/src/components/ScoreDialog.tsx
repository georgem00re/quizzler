
import { useSelector } from "react-redux";
import ShareButton from "./ShareButton.tsx";
import ScoreLabel from "./ScoreLabel.tsx";

export default function ScoreDialog() {

	const score = useSelector(state => state.score);

	return (
		<div class="modal is-active">
			<div class="modal-background"></div>
			<div class="modal-content">
				<div class="container">
					<div class="box">
						<ScoreLabel score={score}/>
						<ShareButton/>
					</div>
				</div>
			</div>
			<button class="modal-close is-large" aria-label="close"></button>
		</div>
	)
}