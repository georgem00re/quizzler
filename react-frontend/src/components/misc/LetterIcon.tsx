import React from "react";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
import { useSelector } from "react-redux";
import { SPACE_GREY, WHITE } from "../../constants/colours.js";

interface LetterIconProps {
  color: string;
  index: number;
}

export default function LetterIcon({ color, index }: LetterIconProps) {
  const lightTheme = useSelector((state) => state.lightTheme);
  const textColor = lightTheme ? WHITE : SPACE_GREY;
  return (
    <div style={{ ...style, backgroundColor: color, color: textColor }}>
      {letters[index]}
    </div>
  );
}

const style = {
  height: "30px",
  width: "30px",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginRight: "10px",
  fontFamily: "Avenir Black",
};
