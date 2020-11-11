import React from "react";
// Components
import Img from "src/components/_parts/Img.component";
import MainBanners from "src/components/_parts/MainBanners.component";
import CategoriesGrid from "src/components/_parts/categories/CategoriesGrid.component";


class HomePage extends React.Component {

    render() {
        return (
            <>
                <MainBanners />
                <CategoriesGrid />
                <br/>
                <br/>
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
            </>
        );
    }
}

export default HomePage;