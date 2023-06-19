import React from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../state/actions";
import { WHITE, SPACE_GREY } from "../../constants/colours";
import { State } from "../../state/store";

export default function ToggleThemeButton() {
  const dispatch = useDispatch();
  const isLightTheme = useSelector((state: State) => state.lightTheme);
  const color = isLightTheme ? SPACE_GREY : WHITE;
  const icon = isLightTheme ? (
    <MdLightMode color={color} size="35px" />
  ) : (
    <MdDarkMode color={color} size="35px" />
  );

  const onClick = () => {
    dispatch(toggleTheme());
    isLightTheme
      ? localStorage.setItem("theme", "dark")
      : localStorage.setItem("theme", "light");
  };

  return (
    <button style={{ ...style }} onClick={onClick}>
      {icon}
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
