
import { createStore, combineReducers } from "redux";
import { quizReducer, questionNumberReducer } from "./reducers.ts";

const reducers = combineReducers({
	quiz: quizReducer,
	questionNumber: questionNumberReducer
})

export default createStore(reducers);