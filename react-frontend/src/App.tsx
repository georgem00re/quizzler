import LandingPage from "./pages/LandingPage.tsx";
import QuizPage from "./pages/QuizPage.tsx";
import ScoreDialog from "./components/ScoreDialog.tsx";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getQuiz } from "./services/data.service.ts";
import AnswerButton from "./components/AnswerButton.tsx";
import QuestionContainer from "./components/QuestionContainer.tsx";
import AnswerContainer from "./components/AnswerContainer.tsx";
import LoadingIndicator from "./components/LoadingIndicator.tsx";
import { updateQuiz } from "./state/actions.ts";
import React from "react";

function App() {

  const dispatch = useDispatch();
  const quiz = useSelector(state => state.quiz)
  const answeredQuestions = useSelector(state => state.answeredQuestions)
  const score = useSelector(state => state.score);
  const [scoreDialogActive, setScoreDialogActive] = useState(false);

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
    <React.Fragment>
      <ScoreDialog active={answeredQuestions.length == quiz.length ? true : false} onDismiss={() => setScoreDialogActive(false)}/>
      <div class="hero has-background-light is-fullheight is-fullwidth p-5">
        <div class="container is-flex is-flex-direction-column is-justify-content-center">
          {questions}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App
