import React from "react";
import Logo from "./Logo.tsx";

const TITLE = "quizzler.io"

export default function Header() {
    return (
        <div class="columns is-flex is-vcentered">
            <Logo/>
            <h1 class="title is-1 has-text-dark has-text-centered">{TITLE}</h1>
        </div>
    )
}