import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LineDivider from "../misc/LineDivider.tsx";
import { closeHelpDialog } from "../../state/actions.ts";
import { WHITE, SPACE_GREY } from "../../constants/colours.js";

export const TEST_ID_HELP_DIALOG = "help-dialog";
export const TEST_ID_HELP_DIALOG_DISMISS = "help-dialog-dismiss";

export default function HelpDialog() {
  const dispatch = useDispatch();
  const isActive = useSelector((state) => state.helpDialogOpen);
  const lightTheme = useSelector((state) => state.lightTheme);
  const className = isActive ? "modal is-active" : "modal";
  const textColor = lightTheme ? SPACE_GREY : WHITE;
  const backgroundColor = lightTheme ? WHITE : SPACE_GREY;
  const linkColor = lightTheme ? null : "#98C3E2";

  const dismiss = () => {
    dispatch(closeHelpDialog());
  };

  return (
    <div className={className} data-testid={TEST_ID_HELP_DIALOG}>
      <div className="modal-background" style={modalBackground}>
        <div className="modal-content">
          <div className="box" style={{ backgroundColor }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h1
                style={{
                  fontFamily: "Avenir Heavy",
                  color: textColor,
                  fontSize: "20px",
                }}
              >
                How to Play
              </h1>
              <button
                onClick={dismiss}
                className="delete"
                aria-label="close"
                data-testid={TEST_ID_HELP_DIALOG_DISMISS}
              ></button>
            </div>
            <p
              style={{
                marginTop: "10px",
                marginBottom: "10px",
                fontFamily: "Avenir",
                color: textColor,
              }}
            >
              Quizzler provides users with a daily, 5-question quiz. Answer all
              the questions and share the results with your friends. The quiz is
              refreshed at midnight.
            </p>
            <h2 style={{ fontFamily: "Avenir", color: textColor }}>
              {" "}
              Created By:{" "}
              <a
                style={{ color: linkColor }}
                href="https://github.com/georgem00re"
              >
                George Moore
              </a>
            </h2>
            <LineDivider />
            <h2
              style={{ margin: "0px", fontFamily: "Avenir", color: textColor }}
            >
              Question Source:{" "}
              <a
                style={{ color: linkColor }}
                href="https://the-trivia-api.com/"
              >
                the-trivia-api.com
              </a>
            </h2>
            <LineDivider />
            <h2 style={{ fontFamily: "Avenir", color: textColor }}>
              Source Code:{" "}
              <a
                style={{ color: linkColor }}
                href="https://github.com/georgem00re/quizzler.io"
              >
                github.com/georgem00re/quizzler.io
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

const modalBackground = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};
