import ScoreDialog from "./components/dialogs/ScoreDialog.tsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getQuiz } from "./services/data.service.ts";
import QuestionContainer from "./components/containers/QuestionContainer.tsx";
import AnswerContainer from "./components/containers/AnswerContainer.tsx";
import LoadingIndicator from "./components/misc/LoadingIndicator.tsx";
import NavigationBar from "./components/misc/NavigationBar.tsx";
import Canvas from "./components/containers/Canvas.tsx";
import { updateQuiz } from "./state/actions.ts";
import React from "react";
import HelpDialog from "./components/dialogs/HelpDialog.tsx";
import StatsDialog from "./components/dialogs/StatsDialog.tsx";
import { LIGHT_GREY, SPACE_GREY, WHITE } from "./constants/colours.js";

function App() {

  const dispatch = useDispatch();
  const quiz = useSelector(state => state.quiz)
  const helpDialogOpen = useSelector(state => state.helpDialogOpen);
  const answeredQuestions = useSelector(state => state.answeredQuestions)
  const score = useSelector(state => state.score);
  const [scoreDialogActive, setScoreDialogActive] = useState(false);
  const lightTheme = useSelector(state => state.lightTheme);
  const backgroundColor = lightTheme ? WHITE : SPACE_GREY;

  useEffect(() => {
    getQuiz().then((res) => {
      dispatch(updateQuiz(res.data));
    })
  }, []) 

  const questions = quiz?.map((element, index) => {
    return <QuestionContainer key={index} question={element.question} correctAnswer={element.correctAnswer} incorrectAnswers={element.incorrectAnswers} answered={answeredQuestions.includes(index) ? true : false} questionNumber={index}/>
  });

  if (quiz == null) return <LoadingIndicator/>
  return (
    <Canvas>
      <ScoreDialog active={answeredQuestions.length == quiz.length ? true : false} onDismiss={() => setScoreDialogActive(false)}/>
      <HelpDialog/>
      <StatsDialog/>
      <NavigationBar/>
      <div class="hero is-fullheight is-fullwidth p-5" style={{ backgroundColor }}>
        <div class="container is-flex is-flex-direction-column is-justify-content-center">
          {questions}
        </div>
      </div>
    </Canvas>
  );
}

export default App
