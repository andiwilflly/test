import React from "react";
import { observer } from "mobx-react";
// Styles
import 'styles/scoped/Footer.scoped.scss';
// Store
import store from "src/store";
// Components
import Img from "src/components/_parts/Img.component";
import Link from "src/components/Link.component";
import T from "src/components/T.component";
import Dropdown from "./_parts/Dropdown.component";


@observer
class Footer extends React.Component {


    renderDropdownItem = (lang)=> {
        return (
            <div className='clickable uppercase text-sm text-black' onClick={ ()=> store.setLang(lang) }>
                { lang }
            </div>
        );
    };


    render() {
        return (
            <footer className="bg-black_light">
                <div className="layout-container">

                    <div className="grid gap-5">
                        <div className="footer-section">
                            <Link to={ `${store.lang}` } className="logo">
                                <Img src={`${process.env.PUBLIC_URL}/svg/logo-white.svg`} className="text-black_light" width={145} height={50} />
                            </Link>
                            <Link to={ `${store.lang}/about-us` } className="text-sm">
                                <T>О нас</T>
                            </Link>
                            <Dropdown title={ <div className="mr-1">{ store.lang }</div> }
                                      mode='dark'
                                      items={ ['en', 'ua', 'ru'] }
                                      renderItem={ this.renderDropdownItem } />
                        </div>

                        <div className="footer-section">
                            <Link to={ `${store.lang}/help` } className="text-sm uppercase font-bold">
                                <T>Помощь</T>
                            </Link>
                            <Link to={ `${store.lang}/FAQ` } className="text-sm">
                                <T>Часто задаваемые вопросы</T>
                            </Link>
                            <Link to={ `${store.lang}/contact-us` } className="text-sm">
                                <T>Связаться с нами</T>
                            </Link>
                        </div>

                        <div className="footer-section">
                            <Link to={ `${store.lang}/info` } className="text-sm uppercase font-bold whitespace-nowrap">
                                <T>Правовая информация</T>
                            </Link>
                            <Link to={ `${store.lang}/terms-and-conditions` } className="text-sm">
                                <T>Положения и условия</T>
                            </Link>
                            <Link to={ `${store.lang}/privacy-policy` } className="text-sm">
                                <T>Политика конфиденциальности</T>
                            </Link>
                        </div>

                        <div className="footer-section">
                            <Link to={ `${store.lang}/contact-us` } className="text-sm uppercase font-bold">
                                <T>Контакты</T>
                            </Link>
                            <a href='https://instagram.com' target="_blank" className="text-sm">
                                <T>Instagram</T>
                            </a>
                            <a href='mailto:test@gmail.com' className="text-sm">
                                <T>Email</T>
                            </a>
                            <a href="tel:+380 (69) - 99 - 74 - 739" className="text-sm">
                                +380 (69) - 99 - 74 - 739
                            </a>
                        </div>

                        <div className="footer-section">
                            <div className="clickable footer-download">
                                <Img src={`${process.env.PUBLIC_URL}/png/app-store.png`} width={196} />
                            </div>
                        </div>

                        <div className="footer-section footer-download">
                            <div className="clickable">
                                <Img src={`${process.env.PUBLIC_URL}/png/google-play.png`} width={196} />
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
