
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