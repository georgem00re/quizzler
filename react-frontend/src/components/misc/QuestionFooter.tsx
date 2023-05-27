import React from "react";
import { useSelector } from "react-redux";
import {
  WHITE,
  SPACE_GREY,
  BORDER_GREY,
  GREY,
} from "../../constants/colours.js";

interface QuestionFooterProps {
  correctAnswer: boolean;
  answered: boolean;
}

export default function QuestionFooter({
  correctAnswer,
  answered,
}: QuestionFooterProps) {
  const lightTheme = useSelector((state) => state.lightTheme);
  const text =
    answered == true
      ? `Correct Answer: ${correctAnswer}`
      : "Select from the options above.";
  const backgroundColor = lightTheme ? WHITE : SPACE_GREY;
  const textColor = lightTheme ? SPACE_GREY : WHITE;
  const borderColor = lightTheme ? BORDER_GREY : GREY;

  return (
    <div style={{ ...style, backgroundColor, color: textColor, borderColor }}>
      {text}
    </div>
  );
}

const style = {
  fontSize: 16,
  fontFamily: "Avenir",
  width: "100%",
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "#CFCFCF",
  borderRadius: "5px",
  padding: "5px",
  paddingLeft: "10px",
  color: "black",
};
