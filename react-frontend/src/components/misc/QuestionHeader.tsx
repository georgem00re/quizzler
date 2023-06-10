import React from "react";
import { useSelector } from "react-redux";
import {
  WHITE,
  SPACE_GREY,
  GREY,
  BORDER_GREY,
} from "../../constants/colours";
import { State } from "../../state/store";

interface QuestionHeaderProps {
  text: string;
}

export default function QuestionHeader({ text }: QuestionHeaderProps) {
  const lightTheme = useSelector((state: State) => state.lightTheme);
  const backgroundColor = lightTheme ? WHITE : SPACE_GREY;
  const textColor = lightTheme ? SPACE_GREY : WHITE;
  const borderColor = lightTheme ? BORDER_GREY : GREY;

  return (
    <h1 style={{ ...style, backgroundColor, color: textColor, borderColor }}>
      {text}
    </h1>
  );
}

const style = {
  fontSize: 18,
  fontFamily: "Avenir Medium",
  width: "100%",
  borderStyle: "solid",
  borderWidth: "1px",
  borderColor: "#CFCFCF",
  borderRadius: "5px",
  padding: "5px",
  paddingLeft: "10px",
  backgroundColor: "#EFEFEF",
  color: "black",
};
