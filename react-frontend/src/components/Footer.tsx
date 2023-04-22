import React from "react";

const GITHUB_REPO = "https://github.com/georgem00re/quizzler.io"
const GITHUB_ACC = "https://github.com/georgem00re"

export default function Footer() {
    return (
        <p class="has-text-centered has-text-dark" style={style}>
            Developed by <a href={GITHUB_ACC}>George Moore</a>.<br/>
            Source code can be found at <a href={GITHUB_REPO}>github.com/georgem00re/quizzler.io</a>
        </p>
    )
}

const style = {
    fontFamily: "Avenir Book"
}