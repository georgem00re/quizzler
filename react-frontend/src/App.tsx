import LandingPage from "./pages/LandingPage.tsx";
import QuizPage from "./pages/QuizPage.tsx";
import { useSelector } from "react-redux";
import React from "react";

function App() {
  const quiz = useSelector(state => state.quiz)

  return (
    <React.Fragment>
      { quiz == null ? <LandingPage/> : <QuizPage/> }
    </React.Fragment>
  )
}

export default App
