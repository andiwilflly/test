import React from "react";
// Components
import Img from "src/components/_parts/Img.component";



class HomePage extends React.Component {

    render() {
        return (
            <section>
                HomePage
                <Img src={`${process.env.PUBLIC_URL}/svg/app-store.svg`} width={20} />
                <Img src={`${process.env.PUBLIC_URL}/svg/google-play.svg`} />
                <Img src={`${process.env.PUBLIC_URL}/svg/clock.svg`} />
                <Img src={`${process.env.PUBLIC_URL}/svg/logo.svg`} />
                <Img src={`${process.env.PUBLIC_URL}/svg/close.svg`} />
                <Img src={`${process.env.PUBLIC_URL}/svg/search.svg`} />
                <Img src={`${process.env.PUBLIC_URL}/svg/cart.svg`} />
                <Img src={`${process.env.PUBLIC_URL}/svg/profile.svg`} />
                <Img src={`${process.env.PUBLIC_URL}/svg/location.svg`} />
                <Img src={`${process.env.PUBLIC_URL}/svg/round-arrow-left.svg`} />
                <Img src={`${process.env.PUBLIC_URL}/svg/round-arrow-right.svg`} />
            </section>
        );
    }
}

export default HomePage;