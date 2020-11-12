import React from "react";
import { observer } from "mobx-react";
// Store
import store from "src/store";
// Components
import MainBanners from "src/components/_parts/banners/MainBanners.component";
import DownloadAppBanner from "src/components/_parts/banners/DownloadAppBanner.component";
import MainCategoriesGrid from "src/components/_parts/categories/MainCategoriesGrid.component";
import MainOffers from "src/components/_parts/offers/MainOffers.component";
import { Desktop, Tablet, Mobile } from "src/components/_parts/MediaQuery.component";


@observer
class HomePage extends React.Component {

    render() {
        return (
            <>
                <MainBanners />

                <div style={{ height: 100 }} />

                <Desktop>
                    <MainCategoriesGrid cols={4} />
                </Desktop>
                <Tablet>
                    <MainCategoriesGrid cols={3} />
                </Tablet>
                <Mobile>
                    <MainCategoriesGrid cols={2} />
                </Mobile>

                { store.settings.SHOW_DOWNLOAD_APP_BANNER ?
                    <>
                        <div style={{ height: 110 }} />
                        <DownloadAppBanner />
                    </>
                    : null }

                <div style={{ height: 100 }} />
                <MainOffers />
            </>
        );
    }
}

export default HomePage;