import React from "react";

interface PlayButtonProps {
    onClick: () => void
};

export default function PlayButton({ onClick }: PlayButtonProps) {
    return <button class="button is-dark" onClick={onClick}>Let's Play!</button>
};

