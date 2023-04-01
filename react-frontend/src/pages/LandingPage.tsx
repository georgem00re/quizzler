import React from "react";
import Header from "../components/Header.tsx"
import Footer from "../components/Footer.tsx"
import PlayButton from "../components/PlayButton.tsx"

export default function LandingPage() {

    const onPlayButtonClick = () => {
        // begin game
    };

    return (
        <div class="hero has-background-light is-fullheight is-fullwidth p-5">
            <Header/>
            <div class="content has-text-centered">
                <PlayButton onClick={() => onPlayButtonClick()}/>
            </div>
            <Footer/>
        </div>
    )
}