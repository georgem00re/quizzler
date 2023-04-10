
import { createStore, combineReducers } from "redux";
import { quizReducer, questionNumberReducer, scoreReducer } from "./reducers.ts";

const reducers = combineReducers({
	quiz: quizReducer,
	questionNumber: questionNumberReducer,
	score: scoreReducer
})

export default createStore(reducers);