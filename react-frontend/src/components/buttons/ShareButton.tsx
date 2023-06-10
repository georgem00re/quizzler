import React from "react";
import { BsShareFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import { useState } from "react";
import { Fragment } from "react";
import { WHITE, SPACE_GREY } from "../../constants/colours";
import { State } from "../../state/store";

export default function ShareButton() {
  const [popupVisible, setPopupVisble] = useState(false);

  const onClick = () => {
    copyToClipboard();
    setPopupVisble(true);
    setTimeout(() => {
      setPopupVisble(false);
    }, 5000);
  };

  const copyToClipboard = () => {
    const str = "# Games: 5, # Questions: 5, % Correct: 5, Today's Score: 5";
    navigator.clipboard.writeText(str);
  };

  return (
    <Fragment>
      <button className="button is-success" style={style} onClick={onClick}>
        <span style={{ marginRight: "5px" }}>Share</span>
        <BsShareFill color="white" style={{ marginLeft: "5px" }} />
      </button>
      {popupVisible == true ? <ClipboardPopup /> : null}
    </Fragment>
  );
}

function ClipboardPopup() {
  const lightTheme = useSelector((state: State) => state.lightTheme);
  const backgroundColor = lightTheme ? SPACE_GREY : WHITE;
  const textColor = lightTheme ? WHITE : SPACE_GREY;
  return (
    <div
      style={{
        backgroundColor,
        position: "absolute",
        top: "20px",
        padding: "10px",
        fontFamily: "Avenir Light",
        color: textColor,
        borderRadius: "5px",
      }}
    >
      Copied Results to Clipboard
    </div>
  );
}

const style = {
  backgroundColor: "#618C55",
  fontFamily: "Avenir Heavy",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexDirection: "row" as "row",
  paddingLeft: "20px",
  paddingRight: "20px",
  borderRadius: "5px",
  marginTop: "10px",
};
