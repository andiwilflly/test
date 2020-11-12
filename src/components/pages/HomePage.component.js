import React from "react";
import { observer } from "mobx-react";
// Store
import store from "src/store";
// Components
import Img from "src/components/_parts/Img.component";
import MainBanners from "src/components/_parts/banners/MainBanners.component";
import DownloadAppBanner from "src/components/_parts/banners/DownloadAppBanner.component";
import CategoriesGrid from "src/components/_parts/categories/CategoriesGrid.component";
import CategoriesOld from "src/components/_parts/Categories_old.component";
import { Desktop, Tablet, Mobile } from "src/components/_parts/MediaQuery.component";


@observer
class HomePage extends React.Component {

    render() {
        return (
            <>
                <MainBanners />

                <div style={{ height: 100 }} />

                <Desktop>
                    <CategoriesGrid cols={4} categoriesIds={ [0,1,2,3,4,5,6] } />
                </Desktop>
                <Tablet>
                    <CategoriesGrid cols={3} categoriesIds={ [0,1,2,3,4,5,6] } />
                </Tablet>
                <Mobile>
                    <CategoriesGrid cols={2} categoriesIds={ [0,1,2,3,4,5,6] } />
                </Mobile>

                { store.settings.SHOW_DOWNLOAD_APP_BANNER ?
                    <>
                        <div style={{ height: 110 }} />
                        <DownloadAppBanner />
                    </>
                    : null }
            </>
        );
    }
}

export default HomePage;