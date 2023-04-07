import React from "react";
import Logo from "./Logo.tsx";
const TITLE = "quizzler.io"

export default function Header() {
    return (
        <div class="columns is-flex is-vcentered is-centered">
            <h1 class="title is-1 has-text-dark has-text-centered" style={style}>{TITLE}</h1>
            <Logo/>
        </div>
    )
}

const style = {
    margin: "0px",
    marginRight: "5px"
}