import LandingPage from "./pages/LandingPage.tsx";
import QuizPage from "./pages/QuizPage.tsx";
import ScoreDialog from "./components/ScoreDialog.tsx";
import { useSelector } from "react-redux";
import React from "react";

function App() {
  const quiz = useSelector(state => state.quiz);
  const score = useSelector(state => state.score);
  const questionNumber = useSelector(state => state.questionNumber);

  const renderPage = () => {
    if (quiz == null) { return <LandingPage/> }
    if (questionNumber == quiz.length) { return <ScoreDialog/> }
    return <QuizPage/>
  }

  return renderPage();
}

export default App
