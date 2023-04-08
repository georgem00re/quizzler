
import { createStore, combineReducers } from "redux";
import { quizReducer } from "./reducers.ts";

const reducers = combineReducers({
	quiz: quizReducer
})

export default createStore(reducers);