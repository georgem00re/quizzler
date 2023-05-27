import React from "react";
import { BiStats } from "react-icons/bi";
import { openStatsDialog } from "../../state/actions.ts";
import { useDispatch, useSelector } from "react-redux";
import { SPACE_GREY, WHITE } from "../../constants/colours.js";

export const TEST_ID_STATS_BUTTON = "stats-button";

export default function StatsButton() {
  const dispatch = useDispatch();
  const lightTheme = useSelector((state) => state.lightTheme);
  const color = lightTheme ? SPACE_GREY : WHITE;
  return (
    <button
      style={style}
      onClick={() => dispatch(openStatsDialog())}
      data-testid={TEST_ID_STATS_BUTTON}
    >
      <BiStats color={color} size="35px" />
    </button>
  );
}

const style = {
  height: "fit-content",
  width: "fit-content",
  backgroundColor: "transparent",
  borderStyle: "none",
  cursor: "pointer",
  display: "flex",
  padding: "0px",
  margin: "5px",
};
