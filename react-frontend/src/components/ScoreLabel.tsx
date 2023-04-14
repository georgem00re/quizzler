
import React from "react";

interface ScoreLabelProps {
	score: number
}

export default function ScoreLabel(props: ScoreLabelProps): JSX.element {
	return <h1 class="title is-1">{props.score}</h1>
}