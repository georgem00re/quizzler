
export function quizReducer(state = null, action) {
	if (action.type === "UPDATE_QUIZ") {
		return action.payload;
	} else {
		return state;
	}
}

export function questionNumberReducer(state = 0, action) {
	if (action.type === "NEXT_QUESTION") {
		return state + 1;
	} else {
		return state;
	}
}