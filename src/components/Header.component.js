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
                <Link to='/' className="logo clickable">
                    <Img src={`${process.env.PUBLIC_URL}/svg/logo.svg`} width={115} height={38} />
                </Link>

                <Link to="/" className="link nowrap"><T>Главная страница</T></Link>
                <Link to="about-us" className="link nowrap"><T>Про нас</T></Link>
                <Link to="contacts" className="link nowrap"><T>Контакты</T></Link>
                <div className='nowrap flex:center'>
                    <Img src={`${process.env.PUBLIC_URL}/svg/location.svg`} width={16} height={22} />
                    &nbsp;&nbsp;
                    <T>Львов</T>
                </div>

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