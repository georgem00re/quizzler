
import React from "react";
import { useSelector } from "react-redux";

export default function ScorePage() {

	const score = useSelector(state => state.score)

	return (
		<div class="hero has-background-dark is-fullheight is-fullwidth p-5">
			<h1>{score}</h1>
		</div>
	)

}