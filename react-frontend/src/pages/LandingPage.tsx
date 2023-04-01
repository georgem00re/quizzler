import React from "react";
import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import PlayButton from "../components/PlayButton.tsx"

export default function LandingPage() {
    return (
        <div class="hero has-background-light is-fullheight is-fullwidth p-5">
            <Header/>
            <div class="content has-text-centered">
                <PlayButton onClick={() => alert("Working!")}/>
            </div>
            <Footer/>
        </div>
    )
}