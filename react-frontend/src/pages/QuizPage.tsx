
import React from "react";
import { useSelector } from "react-redux";
import AnswerButton from "../components/AnswerButton.tsx";
import ScoreDialog from "../components/ScoreDialog.tsx";
import QuestionContainer from "../components/QuestionContainer.tsx";
import AnswerContainer from "../components/AnswerContainer.tsx";

export default function QuizPage() {

	const quiz = useSelector(state => state.quiz)
	const questionNumber = useSelector(state => state.questionNumber)
	const question = quiz[questionNumber];
	const answers = question.incorrectAnswers.concat([question.correctAnswer])

	const buttons = answers.map((element, index) => {
		return <AnswerButton key={index} index={index} text={element} correct={ element == question.correctAnswer ? true : false }/>
	})

	const questions = [1,2,3].map((element, index) => {
		return <QuestionContainer question={"Who is the best person?"} incorrectAnswers={["George", "Max", "Philip"]} correctAnswer={"James"}/>
	})

	return (
		<div class="hero has-background-light is-fullheight is-fullwidth p-5">
			<div class="container is-flex is-flex-direction-column is-justify-content-center">
				<QuestionContainer/>
			</div>
		</div>
	)
}