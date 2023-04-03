import React from "react";
import Logo from "./Header.tsx"

const TITLE = "quizzler.io"

export default function Header() {
    return (
        <div>
            <Logo/>
            <h1 class="title is-1 has-text-dark has-text-centered">{TITLE}</h1>
        </div>
    )
}