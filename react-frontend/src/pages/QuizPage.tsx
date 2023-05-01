
import React from "react";
import { useSelector } from "react-redux";
import AnswerButton from "../components/AnswerButton.tsx";
import ScoreDialog from "../components/ScoreDialog.tsx";
import QuestionContainer from "../components/QuestionContainer.tsx";
import AnswerContainer from "../components/AnswerContainer.tsx";

export default function QuizPage() {

	const quiz = useSelector(state => state.quiz)
	const answeredQuestions = useSelector(state => state.answeredQuestions)

	const questions = quiz.map((element, index) => {
		return <QuestionContainer key={index} question={element.question} correctAnswer={element.correctAnswer} incorrectAnswers={element.incorrectAnswers} answered={answeredQuestions.includes(index) ? true : false} questionNumber={index}/>
	})

	console.log(quiz);

	return (
		<div class="hero has-background-light is-fullheight is-fullwidth p-5">
			<div class="container is-flex is-flex-direction-column is-justify-content-center">
				{questions}
			</div>
		</div>
	)
}