import React from "react";
import { Link } from "@reach/router";
import i18next from 'i18next';
// Styles
import "styles/scoped/Header.scoped.scss";
// Components
import Img from "src/components/_parts/Img.component";
import T from "src/components/T.component";


class Header extends React.Component {

    changeLang = (lang)=> ()=> {
        i18next.changeLanguage(lang);
    };


    render() {
        return (
            <header>
                <Img src={`${process.env.PUBLIC_URL}/svg/logo.svg`} width={115} height={38} />

                <nav className="flex:between:center">
                    <Link to="/" className="link nowrap"><T>Главная страница</T></Link>
                    <Link to="dashboard" className="link nowrap"><T>Про нас</T></Link>
                    <Link to="dashboard" className="link nowrap"><T>Контакты</T></Link>
                    <Link to="dashboard" className="link nowrap flex">
                        <Img src={`${process.env.PUBLIC_URL}/svg/location.svg`} width={16} height={22} />
                        <T>Львов</T>
                    </Link>
                </nav>

                <div className="controls flex:around:center">
                    <div className="search">
                        <button className="clickable">
                            <Img src={`${process.env.PUBLIC_URL}/svg/search.svg`} width={24} height={24} />
                        </button>
                        <input type="text" />
                    </div>

                    <div className="clickable">
                        <Img src={`${process.env.PUBLIC_URL}/svg/cart.svg`} width={24} height={24} />
                    </div>

                    <div className="clickable">
                        <Img src={`${process.env.PUBLIC_URL}/svg/profile.svg`} width={24} height={24} />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;