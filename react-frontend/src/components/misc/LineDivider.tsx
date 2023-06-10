import React from "react";
import { useSelector } from "react-redux";
import { GREY, BORDER_GREY } from "../../constants/colours";
import { State } from "../../state/store";

export default function LineDivider() {
  const lightTheme = useSelector((state: State) => state.lightTheme);
  const color = lightTheme ? BORDER_GREY : GREY;

  return (
    <hr
      className="dotted"
      style={{
        backgroundColor: color,
        marginTop: "3px",
        marginBottom: "3px",
        borderTop: `1px solid ${color}`,
      }}
    />
  );
}
