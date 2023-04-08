import React from "react";
import { getQuiz } from "../services/data.service.ts";

interface PlayButtonProps {
    onClick: () => void
};

const fetchQuiz = () => {
    getQuiz().then((res) => {
        console.log(res);
    })
}

export default function PlayButton({ onClick }: PlayButtonProps) {
    return <button class="button is-dark" onClick={() => fetchQuiz()}>Let's Play!</button>
};

