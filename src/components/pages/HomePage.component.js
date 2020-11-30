import React from "react";
import { observer } from "mobx-react";
// Store
import store from "src/store";
// Components
import DownloadAppBanner from "src/components/_parts/banners/DownloadAppBanner.component";
import MainOffers from "src/components/_parts/offers/MainOffers.component";
import Categories from "src/components/_parts/categories/Categories.component";
import MainBanner from "src/components/_parts/banners/MainBanner.component";


@observer
class HomePage extends React.Component {

    render() {
        return (
            <>
                <MainBanner />

                <div className="layout-divider" />

                <div className="layout-container">
                    <Categories />
                </div>

                { store.settings.SHOW_DOWNLOAD_APP_BANNER ?
                    <>
                        <div style={{ height: 110 }} />
                        <DownloadAppBanner />
                    </>
                    : null }

                <div className="layout-divider" />
                <MainOffers />
                <div className="layout-divider" />
            </>
        );
    }
}

export default HomePage;
