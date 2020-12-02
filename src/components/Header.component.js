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
import Dropdown from "src/components/_parts/Dropdown.component";
import Img from "src/components/_parts/Img.component";
import T from "src/components/T.component";


@observer
class Header extends React.Component {


    @observable search = {
        isOpen: false,
        value: ''
    };


    controlsDefaultWidth = 240;


    @computed get searchWidth() { return this.search.isOpen ? 237 : 24; };
    @computed get controlsWidth() { return this.search.isOpen ? this.controlsDefaultWidth + this.searchWidth - 24 : this.controlsDefaultWidth; };


    onSearchClick = (e)=> {
        e.preventDefault();

        this.search.isOpen = !this.search.isOpen;
    };


    renderDropdownItem = (lang)=> {
        return (
            <div className='clickable uppercase text-sm' onClick={ ()=> store.setLang(lang) }>
                { lang }
            </div>
        );
    };


    render() {
        return (
            <div className="header-wrapper">
                <header className='bg-white'>
                    <div className="layout-container flex justify-between items-center">
                        <div className="logo-wrapper flex justify-between items-center">
                            <Link to={ `${store.lang}` } className="logo clickable">
                                <Img src={`${process.env.PUBLIC_URL}/svg/logo.svg`} className="text-black_light" width={145} height={50} />
                            </Link>

                            <div className='nowrap flex justify-between items-center'>
                                <Img src={`${process.env.PUBLIC_URL}/svg/location.svg`} className="animate-bounce text-black_light" width={18} height={24} />
                                <div className="ml-2"><T>Львов</T></div>
                            </div>
                        </div>

                        <div className="controls flex justify-between items-center" style={{ width: this.controlsWidth }}>

                            <form className="search"
                                  style={{ width: this.searchWidth }}
                                  onSubmit={ this.onSearchClick } >
                                <input type="text"
                                       placeholder={ i18next.t('search...') }
                                       onChange={ (e)=> this.search.value = e.target.value }
                                       value={ this.search.value }
                                       style={{
                                           width: this.searchWidth,
                                           opacity: this.search.isOpen ? 1 : 0,
                                           pointerEvents: this.search.isOpen ? 'auto' : 'none'
                                       }} />

                                <button className="clickable" type="submit" onClick={ this.onSearchClick }>
                                    <Img src={`${process.env.PUBLIC_URL}/svg/search.svg`} width={24} height={24} />
                                </button>
                            </form>

                            <Link to={ `${store.lang}/cart` } className="clickable">
                                <Img src={`${process.env.PUBLIC_URL}/svg/cart.svg`} className="text-black_light" width={24} height={24} />
                            </Link>

                            <Link to={ `${store.lang}/profile` } className="clickable">
                                <Img src={`${process.env.PUBLIC_URL}/svg/profile.svg`} className="text-black_light" width={24} height={24} />
                            </Link>

                            <div style={{ width: 55 }}>
                                <Dropdown title={ <div className="mr-1">{ store.lang }</div> }
                                          items={ ['en', 'ua', 'ru'] }
                                          renderItem={ this.renderDropdownItem } />
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;
