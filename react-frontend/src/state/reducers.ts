
export function quizReducer(state = null, action) {
	if (action.type === "UPDATE_QUIZ") {
		return action.payload;
	} else {
		return state;
	}
}