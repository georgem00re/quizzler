import React from "react";
import { getQuiz } from "../services/data.service.ts";
import { useDispatch } from "react-redux";
import { BsFillPlayFill } from "react-icons/bs";

export default function PlayButton() {
  const dispatch = useDispatch();

  const fetchQuiz = () => {
    getQuiz().then((res) => {
      dispatch({ type: "UPDATE_QUIZ", payload: res.data });
    });
  };

  return (
    <button
      className="button is-dark px-5"
      style={style}
      onClick={() => fetchQuiz()}
    >
      Let&quot;s Play
      <BsFillPlayFill style={{ marginLeft: "10px" }} />
    </button>
  );
}

const style = {
  fontFamily: "Avenir",
};
