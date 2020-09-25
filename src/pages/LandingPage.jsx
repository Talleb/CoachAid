import React from "react";
import AnimationRevealPage from "../helpers/AnimationRevealPage.jsx";
import Hero from "../components/hero/TwoColumnWithPrimaryBackground.jsx";
// import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
// import Footer from "components/footers/FiveColumnDark.js";


export default () => {
    return (
        <AnimationRevealPage>
            <Hero />
            {/* <Features /> */}
            {/* <Footer /> */}
        </AnimationRevealPage>
    );
}
