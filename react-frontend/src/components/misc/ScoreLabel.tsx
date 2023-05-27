import React from "react";
import { SPACE_GREY, WHITE } from "../../constants/colours.js";
import { useSelector } from "react-redux";

export default function ScoreLabel() {
  const lightTheme = useSelector((state) => state.lightTheme);
  const textColor = lightTheme ? SPACE_GREY : WHITE;
  const borderColor = lightTheme ? SPACE_GREY : WHITE;
  const answeredQuestions = useSelector((state) => state.answeredQuestions);
  const isQuizComplete = answeredQuestions.length >= 5;
  const score = useSelector((state) => state.score);
  console.log(score);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Avenir Light",
        color: textColor,
        margin: "10px",
      }}
    >
      <h1>Today&quot;s Score:</h1>
      <h2 style={{ ...style, borderColor, color: textColor }}>
        {isQuizComplete ? score : "?"}
      </h2>
    </div>
  );
}

const style = {
  height: "50px",
  width: "50px",
  backgroundColor: "transparent",
  borderStyle: "solid",
  borderWidth: "3px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontFamily: "Avenir Black",
  marginTop: "5px",
  textAlign: "center",
  fontSize: "20px",
};
