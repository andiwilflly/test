import React from "react";
import { Link } from "@reach/router";
import i18next from 'i18next';
// Styles
import "styles/scoped/Header.scoped.css";
// Components
import T from "src/components/T.component";


class Header extends React.Component {

    changeLang = (lang)=> ()=> {
        i18next.changeLanguage(lang);
    };


    render() {
        return (
            <header>
                <nav>
                    <Link to="/">Home</Link> | {" "}
                    <Link to="dashboard">Dashboard</Link>
                    <button onClick={ this.changeLang('en') }>EN</button>
                    <button onClick={ this.changeLang('ru') }>RU</button>
                    <T>key</T>
                </nav>
            </header>
        );
    }
}

export default Header;