
import { createStore, combineReducers } from "redux";
import { quizReducer, answeredQuestions, scoreReducer, helpDialogOpen, settingsDialogOpen, lightTheme, statsDialogOpen } from "./reducers.ts";

const reducers = combineReducers({
	quiz: quizReducer,
	answeredQuestions: answeredQuestions,
	score: scoreReducer,
	helpDialogOpen: helpDialogOpen,
	settingsDialogOpen: settingsDialogOpen,
	lightTheme: lightTheme,
	statsDialogOpen: statsDialogOpen,
})

export default createStore(reducers);