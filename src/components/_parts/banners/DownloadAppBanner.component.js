import React from "react";
// MobX
import { observer } from "mobx-react";
// Styles
import "src/styles/scoped/banners/DownloadAppBanner.scoped.scss";
// Components
import Img from "src/components/_parts/Img.component";
import T from "src/components/T.component";


@observer
class DownloadAppBanner extends React.Component {


    render() {
        return (
            <div className="banner-wrapper">
                <div className="banner bg-yellow_light">

                    <div className="layout-container flex justify-between items-center">

                        <div className="banner-info">
                            <div className="text-xxl text-black_light font-gotham_black uppercase">
                                <T>Скачивайте наше приложение</T>
                            </div>

                            <div className="flex items-center mt-5">
                                <div className="clickable mr-5">
                                    <Img src={`${process.env.PUBLIC_URL}/png/app-store.png`} width={196} />
                                </div>
                                <div className="clickable">
                                    <Img src={`${process.env.PUBLIC_URL}/png/google-play.png`} width={196} />
                                </div>
                            </div>
                        </div>


                        <div className="banner-phone">
                                <Img src={`${process.env.PUBLIC_URL}/png/phone.png`}
                                     width='100%'
                                     heightRatio={ 1.9 } />
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default DownloadAppBanner;
