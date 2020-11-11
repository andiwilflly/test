import React from "react";
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
        this.banners = response;
    }


    render() {
        return (
            <Carousel width='100%'
                      autoplay
                      withoutControls
                      pauseOnHover
                      slideWidth={1}>
                { this.banners.map(banner => {
                    return <Img src={`${process.env.PUBLIC_URL}${banner.src}`} />
                })}
            </Carousel>
        );
    }
}

export default MainBanners;