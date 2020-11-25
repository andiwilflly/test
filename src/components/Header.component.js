import React from "react";
import i18next from 'i18next';
// MobX
import { observer } from "mobx-react";
import { observable, computed } from "mobx";
// Styles
import "styles/scoped/Header.scoped.scss";
// Store
import store from "src/store";
// Components
import Link from "src/components/Link.component";
import Img from "src/components/_parts/Img.component";
import T from "src/components/T.component";


@observer
class Header extends React.Component {


    @observable search = {
        isOpen: false,
        value: ''
    };


    controlsDefaultWidth = 220;


    @computed get searchWidth() { return this.search.isOpen ? 237 : 0; };
    @computed get controlsWidth() { return this.search.isOpen ? this.controlsDefaultWidth + this.searchWidth : this.controlsDefaultWidth; };


    // changeLang = (lang)=> ()=> {
    //     i18next.changeLanguage(lang);
    // };

    onSearchClick = (e)=> {
        e.preventDefault();

        this.search.isOpen = !this.search.isOpen;
    };



    render() {
        return (
            <header>
                <Link to={ `${store.lang}` } className="logo clickable">
                    <Img src={`${process.env.PUBLIC_URL}/svg/logo.svg`} className="text-black_light" width={115} height={38} />
                </Link>

                <div className='nowrap flex justify-around items-center'>
                    <Img src={`${process.env.PUBLIC_URL}/svg/location.svg`} className="animate-bounce text-black_light" width={16} height={22} />
                    &nbsp;&nbsp;
                    <T>Львов</T>
                </div>

                <div className="controls flex justify-around items-center" style={{ width: this.controlsWidth }}>

                    <form className="search" onSubmit={ this.onSearchClick }>
                        <button className="clickable" type="submit" onClick={ this.onSearchClick }>
                            <Img src={`${process.env.PUBLIC_URL}/svg/search.svg`} width={24} height={24} />
                        </button>
                        <input type="text"
                               placeholder={ i18next.t('search...') }
                               onChange={ (e)=> this.search.value = e.target.value }
                               value={ this.search.value }
                               style={{
                                   width: this.searchWidth,
                                   opacity: this.search.isOpen ? 1 : 0,
                                   pointerEvents: this.search.isOpen ? 'auto' : 'none'
                               }} />
                    </form>

                    <Link to={ `${store.lang}/cart` } className="clickable">
                        <Img src={`${process.env.PUBLIC_URL}/svg/cart.svg`} className="text-black_light" width={24} height={24} />
                    </Link>

                    <Link to={ `${store.lang}/profile` } className="clickable">
                        <Img src={`${process.env.PUBLIC_URL}/svg/profile.svg`} className="text-black_light" width={24} height={24} />
                    </Link>

                    <div>
                        { store.lang }
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;
