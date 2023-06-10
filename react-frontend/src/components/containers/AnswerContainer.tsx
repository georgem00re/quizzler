import React, { PropsWithChildren } from "react";

export default function AnswerContainer({ children }: PropsWithChildren) {
  return <div style={style}>{children}</div>;
}

const style = {
  display: "flex",
  flexWrap: "wrap" as "wrap",
  flexDirection: "row" as "row",
  boxSizing: "border-box" as "border-box",
  padding: "5px 0px 5px 0px",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
};
