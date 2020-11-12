import React from "react";
import { Link } from "@reach/router";
import Carousel from 'nuka-carousel';
// MobX
import { observer } from "mobx-react";
import { observable } from "mobx";
// Store
import store from "src/store";
// Components
import Img from "src/components/_parts/Img.component";


@observer
class MainBanners extends React.Component {

    componentDidMount() {
        this.getBanners();
    }


    @observable banners = [];



    async getBanners() {
        let response = await store.auth.fetch("/api/banners");
        response = await response.json();
        this.banners = response.banners;
    }


    render() {
        return (
            <Carousel width='100%'
                      autoplay
                      withoutControls
                      pauseOnHover
                      slideWidth={1}>
                { this.banners.map(banner => {
                    return (
                        <Link style={{ display: 'block' }}
                              className="clickable"
                              to={`restaurant/${banner.restaurantId}`} key={banner.restaurantId}>
                            <Img src={`${process.env.PUBLIC_URL}${banner.bannerUrl}`} width="100%" />
                        </Link>
                    )
                })}
            </Carousel>
        );
    }
}

export default MainBanners;