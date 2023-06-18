import React from "react";
import { useSelector } from "react-redux";
import { SPACE_GREY, WHITE } from "../../constants/colours";
import { useState, useEffect } from "react";
import { State } from "../../state/store";

export default function Timer() {
  const lightTheme = useSelector((state: State) => state.lightTheme);
  const textColor = lightTheme ? SPACE_GREY : WHITE;
  const [time, setTime] = useState("??:??:??");

  useEffect(() => {
    const interval = setInterval(() => updateTimer(), 1000);
    return () => {
      clearInterval(interval);
    };
  });

  const updateTimer = () => {
    const nextMidnight = new Date();
    nextMidnight.setHours(24, 0, 0, 0);
    const now = new Date();
    const remainingTimeInSeconds =
      (nextMidnight.getTime() - now.getTime()) / 1000;
    const date = new Date();
    date.setSeconds(remainingTimeInSeconds);
    const hhmmssFormat = date.toISOString().substr(11, 8);
    setTime(hhmmssFormat);
  };

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
      <h2>Time until next quiz:</h2>
      <h1 style={{ ...style, color: textColor }}>{time}</h1>
    </div>
  );
}

const style = {
  fontFamily: "Avenir Black",
  fontSize: "30px",
  textAlign: "center" as const,
  margin: "0px",
};
