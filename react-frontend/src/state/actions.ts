
export function updateQuiz(quiz) {
	return {
		type: "UPDATE_QUIZ",
		payload: quiz
	}
}

export function answerQuestion(index) {
	return {
		type: "ANSWER_QUESTION",
		payload: index
	}
}

export function correctAnswer() {
	return {
		type: "CORRECT_ANSWER"
	}
}

export function incorrectAnswer() {
	return {
		type: "INCORRECT_ANSWER"
	}
}