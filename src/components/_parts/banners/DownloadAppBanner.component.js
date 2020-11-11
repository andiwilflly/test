import React from "react";
// MobX
import { observer } from "mobx-react";
// Styles
import "src/styles/scoped/banners/DownloadAppBanner.scoped.scss";
// Store
import store from "src/store"
// Components
import Img from "src/components/_parts/Img.component";


@observer
class DownloadAppBanner extends React.Component {

    onCloseClick = ()=> {
        store.settings.update({
            SHOW_DOWNLOAD_APP_BANNER: false
        });
    };


    render() {
        return (
            <div className="banner">
                <div className="banner-close clickable" onClick={ this.onCloseClick }>
                    <Img src={`${process.env.PUBLIC_URL}/svg/close.svg`} width={14} height={14} />
                </div>
                <div className="banner-title">Скачивай наше приложение</div>
                <div className="banner-subtitle">Спасай еду и экономь деньги</div>

                <div className="banner-buttons flex">
                    <div className="banner-app-store clickable">
                        <Img src={`${process.env.PUBLIC_URL}/png/app-store.png`} width={196} />
                    </div>
                    <div className="banner-google-play clickable">
                        <Img src={`${process.env.PUBLIC_URL}/png/google-play.png`} width={196} />
                    </div>
                </div>
            </div>
        );
    }
}

export default DownloadAppBanner;