import React from "react";
import { observer } from "mobx-react";
// Store
import store from "src/store";
// Components
import DownloadAppBanner from "src/components/_parts/banners/DownloadAppBanner.component";
import MainOffers from "src/components/_parts/offers/MainOffers.component";
import Categories from "src/components/_parts/categories/Categories.component";


@observer
class HomePage extends React.Component {

    render() {
        return (
            <>
                <div style={{ height: 100 }} />

                <Categories />

                { store.settings.SHOW_DOWNLOAD_APP_BANNER ?
                    <>
                        <div style={{ height: 110 }} />
                        <DownloadAppBanner />
                    </>
                    : null }

                <div style={{ height: 110 }} />
                <MainOffers />
                <div style={{ height: 300 }} />
            </>
        );
    }
}

export default HomePage;
