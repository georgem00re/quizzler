import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  answerQuestion,
  correctAnswer,
  incorrectAnswer,
} from "../../state/actions.ts";
import LetterIcon from "../misc/LetterIcon.tsx";
import { RxCross2 } from "react-icons/rx";
import { FiCheck } from "react-icons/fi";
import {
  WHITE,
  SPACE_GREY,
  BORDER_GREY,
  GREY,
  DARK_GREEN,
  DARK_RED,
  LIGHT_GREEN,
  LIGHT_RED,
} from "../../constants/colours.js";

export const TEST_ID_ANSWER_BUTTON = "answer-button";

interface AnswerButtonProps {
  text: string;
  correct: bool;
  index: number;
  answered: bool;
  questionNumber: number;
}

export default function AnswerButton({
  text,
  correct,
  index,
  answered,
  questionNumber,
}: AnswerButtonProps) {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.lightTheme);
  const GREEN = lightTheme ? DARK_GREEN : LIGHT_GREEN;
  const RED = lightTheme ? DARK_RED : LIGHT_RED;
  const color =
    answered == false
      ? lightTheme
        ? SPACE_GREY
        : WHITE
      : correct == true
      ? GREEN
      : RED;
  const backgroundColor = lightTheme ? "WHITE" : SPACE_GREY;
  const [selected, setSelected] = useState(false);
  const borderColor = lightTheme ? BORDER_GREY : GREY;

  const onClick = () => {
    correct ? dispatch(correctAnswer()) : dispatch(incorrectAnswer());
    dispatch(answerQuestion(questionNumber));
    setSelected(true);
  };

  return (
    <button
      onClick={() => onClick()}
      style={{ ...style, backgroundColor, color, borderColor }}
      disabled={answered}
      data-testid={TEST_ID_ANSWER_BUTTON}
    >
      <LetterIcon index={index} color={color} />
      {text}
      {selected ? (
        correct ? (
          <FiCheck style={{ marginLeft: "15px" }} color={color} />
        ) : (
          <RxCross2 style={{ marginLeft: "15px" }} color={color} />
        )
      ) : null}
    </button>
  );
}

const style = {
  fontFamily: "Avenir",
  fontSize: "16px",
  borderRadius: "5px",
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "#CFCFCF",
  padding: "5px",
  cursor: "pointer",
  margin: "5px 0px 5px 0px",
  display: "flex",
  alignItems: "center",
  boxSizing: "border-box",
  width: "100%",
};
