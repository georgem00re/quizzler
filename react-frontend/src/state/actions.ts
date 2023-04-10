
export function updateQuiz(quiz) {
	return {
		type: "UPDATE_QUIZ",
		payload: quiz
	}
}

export function nextQuestion() {
	return {
		type: "NEXT_QUESTION"
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