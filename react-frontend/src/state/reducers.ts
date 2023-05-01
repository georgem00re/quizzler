
export function quizReducer(state = null, action) {
	if (action.type === "UPDATE_QUIZ") {
		return action.payload;
	} else {
		return state;
	}
}

export function answeredQuestions(state = [], action) {
	if (action.type === "ANSWER_QUESTION") {
		return [...state, action.payload];
	} else {
		return state;
	}
}

export function scoreReducer(state = 0, action) {
	if (action.type === "CORRECT_ANSWER") {
		return state + 1;
	} else if (action.type === "INCORRECT_ANSWER") {
		return state;
	} else {
		return state;
	}
}