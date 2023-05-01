
import { createStore, combineReducers } from "redux";
import { quizReducer, answeredQuestions, scoreReducer } from "./reducers.ts";

const reducers = combineReducers({
	quiz: quizReducer,
	answeredQuestions: answeredQuestions,
	score: scoreReducer
})

export default createStore(reducers);