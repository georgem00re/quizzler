import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeStatsDialog } from "../../state/actions";
import StatsCell from "../misc/StatsCell";
import ShareButton from "../buttons/ShareButton";
import { WHITE, SPACE_GREY } from "../../constants/colours";
import Timer from "../misc/Timer";
import ScoreLabel from "../misc/ScoreLabel";
import { State } from "../../state/store";

export const TEST_ID_STATS_DIALOG = "stats-dialog";
export const TEST_ID_STATS_DIALOG_DISMISS = "stats-dialog-dismiss";

export default function HelpDialog() {
  const dispatch = useDispatch();
  const isActive = useSelector((state: State) => state.statsDialogOpen);
  const className = isActive ? "modal is-active" : "modal";
  const lightTheme = useSelector((state: State) => state.lightTheme);
  const backgroundColor = lightTheme ? WHITE : SPACE_GREY;
  const textColor = lightTheme ? SPACE_GREY : WHITE;

  const dismiss = () => {
    dispatch(closeStatsDialog());
  };

  return (
    <div className={className} data-testid={TEST_ID_STATS_DIALOG}>
      <div className="modal-background" style={modalBackground}>
        <div
          className="modal-content"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="box"
            style={{ width: "fit-content", backgroundColor }}
          >
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
                Statistics
              </h1>
              <button
                onClick={dismiss}
                className="delete"
                aria-label="close"
                data-testid={TEST_ID_STATS_DIALOG_DISMISS}
              ></button>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <StatsCell value={0} title={"Games #"} />
              <StatsCell value={0} title={"Questions #"} />
              <StatsCell value={0} title={"Correct %"} />
            </div>
            <ScoreLabel />
            <Timer />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ShareButton />
            </div>
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
