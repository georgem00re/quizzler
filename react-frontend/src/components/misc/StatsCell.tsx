import React from "react";
import { useSelector } from "react-redux";
import { SPACE_GREY, WHITE } from "../../constants/colours";
import { State } from "../../state/store";

interface StatsCellProps {
  value: number;
  title: string;
}

export default function StatsCell(props: StatsCellProps) {
  const lightTheme = useSelector((state: State) => state.lightTheme);
  const textColor = lightTheme ? SPACE_GREY : WHITE;
  return (
    <div style={{ ...style, color: textColor }}>
      <h1
        style={{
          fontFamily: "Avenir Heavy",
          fontSize: "25px",
          margin: "0px",
          textAlign: "center",
          height: "fit-content",
          padding: "0px",
        }}
      >
        {props.value}
      </h1>
      <h2
        style={{ fontFamily: "Avenir Light", fontSize: "15px", margin: "0px" }}
      >
        {props.title}
      </h2>
    </div>
  );
}

const style = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column" as const,
  margin: "20px",
};
