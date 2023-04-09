
import React from "react";
import { useSelector } from "react-redux";
import AnswerButton from "../components/AnswerButton.tsx";

export default function QuizPage() {

	const quiz = useSelector(state => state.quiz)
	const questionNumber = 0;
	const question = quiz[questionNumber];
	const answers = question.incorrectAnswers.concat([question.correctAnswer])

	const buttons = answers.map((element, index) => {
		return <AnswerButton key={index} text={element}/>
	})

	return (
		<div class="hero has-background-light is-fullheight is-fullwidth p-5">
			<div class="columns is-vcentered">{buttons}</div>
		</div>
	)
}