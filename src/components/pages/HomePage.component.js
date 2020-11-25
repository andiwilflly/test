import React from "react";
import { observer } from "mobx-react";
// Store
import store from "src/store";
// Components
import DownloadAppBanner from "src/components/_parts/banners/DownloadAppBanner.component";
import MainCategoriesGrid from "src/components/_parts/categories/MainCategoriesGrid.component";
import MainOffers from "src/components/_parts/offers/MainOffers.component";
import { Desktop, Tablet, Mobile } from "src/components/_parts/MediaQuery.component";


@observer
class HomePage extends React.Component {

    render() {
        return (
            <>

                <div className="grid grid-cols-3 tablet:grid-cols-2 mobile:grid-cols-1">
                    <div className="text-xl font-gotham_black uppercase">Gotham Pro Black 40 </div>
                    <div className="text-lg font-gotham font-semibold">Gotham Pro Medium 32</div>
                    <div className="text-md font-semibold">Noto Sans Medium 20</div>
                    <div className="text-md">Noto Sans Regular 20</div>
                    <div className="text-base">Noto Sans Regular 16</div>
                    <div className="text-sm ">Noto Sans Regular 14</div>
                </div>

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

                <div style={{ height: 110 }} />
                <MainOffers />
                <div style={{ height: 300 }} />
            </>
        );
    }
}

export default HomePage;
