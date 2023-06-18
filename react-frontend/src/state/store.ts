import { createStore, combineReducers } from "redux";
import {
  quizReducer,
  answeredQuestions,
  scoreReducer,
  helpDialogOpen,
  settingsDialogOpen,
  lightTheme,
  statsDialogOpen,
} from "./reducers";

export interface Question {
  question: string;
  correctAnswer: string;
  incorrectAnswers: Array<string>;
}

export interface State {
  quiz: Array<Question>;
  answeredQuestions: Array<number>;
  score: number;
  helpDialogOpen: boolean;
  settingsDialogOpen: boolean;
  lightTheme: boolean;
  statsDialogOpen: boolean;
}

const reducers = combineReducers({
  quiz: quizReducer,
  answeredQuestions: answeredQuestions,
  score: scoreReducer,
  helpDialogOpen: helpDialogOpen,
  settingsDialogOpen: settingsDialogOpen,
  lightTheme: lightTheme,
  statsDialogOpen: statsDialogOpen,
});

export default createStore(reducers);
