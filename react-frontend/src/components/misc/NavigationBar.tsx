import React from "react";
import HelpButton from "../buttons/HelpButton";
import Logo from "./Logo";
import StatsButton from "../buttons/StatsButton";
import ToggleThemeButton from "../buttons/ToggleThemeButton";
import { SPACE_GREY, WHITE, GREY } from "../../constants/colours";
import { useSelector } from "react-redux";
import { State } from "../../state/store";

export default function NavigationBar() {
  const lightTheme = useSelector((state: State) => state.lightTheme);
  const backgroundColor = lightTheme ? WHITE : SPACE_GREY;
  const textColor = lightTheme ? SPACE_GREY : WHITE;
  const borderColor = lightTheme ? "#CFCFCF" : GREY;

  return (
    <div style={{ ...style, backgroundColor, borderColor }}>
      <Logo width="40px" />
      <h1 style={{ ...header, color: textColor }}>quizzler</h1>
      <span
        style={{
          display: "flex",
          marginRight: "20px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HelpButton />
        <StatsButton />
        <ToggleThemeButton />
      </span>
    </div>
  );
}

const style = {
  display: "flex",
  padding: "0px",
  width: "100%",
  height: "60px",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottomStyle: "solid" as const,
  borderWidth: "1px",
  borderColor: "#CFCFCF",
  flexDirection: "row" as const,
};

const header = {
  fontFamily: "Avenir Black",
  fontSize: "35px",
  margin: "0px",
};
