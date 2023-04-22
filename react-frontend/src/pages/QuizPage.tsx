
import React from "react";
import { useSelector } from "react-redux";
import AnswerButton from "../components/AnswerButton.tsx";
import QuestionHeader from "../components/QuestionHeader.tsx";
import ScoreDialog from "../components/ScoreDialog.tsx";
import QuestionIndicator from "../components/QuestionIndicator.tsx";
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

	return (
		<div class="hero has-background-light is-fullheight is-fullwidth p-5">
			<div class="container is-flex is-flex-direction-column is-justify-content-center">
				<QuestionContainer>
					<QuestionIndicator number={questionNumber + 1} maximum={5}/>
					<QuestionHeader text={quiz[questionNumber].question}/>
				</QuestionContainer>
				<AnswerContainer>
					{buttons}
				</AnswerContainer>
			</div>
		</div>
	)
}