import React from "react";
import Carousel from 'nuka-carousel';
// MobX
import { observer } from "mobx-react";
// Decorators
import WithSWR from "src/decorators/WithSWR.decorator";
// Components
import Link from "src/components/Link.component";
import Img from "src/components/_parts/Img.component";


@WithSWR({
    url: "/api/banners",
    name: 'banners'
})
@observer
class MainBanners extends React.Component {


    $carousel = null;


    handleLoadImage = ()=> {
        this.$carousel.setDimensions();
    };


    render() {
        return (
            <Carousel width='100%'
                      autoplay
                      ref={ $ref => this.$carousel = $ref }
                      withoutControls
                      pauseOnHover
                      slideWidth={1}>
                { this.props.banners.banners.map(banner => {
                    return (
                        <Link style={{ display: 'block' }}
                              className="clickable"
                              to={`restaurant/${banner.restaurantId}`} key={banner.restaurantId}>
                            <Img src={`${process.env.PUBLIC_URL}${banner.bannerUrl}`}
                                 width="100%"
                                 onLoad={ this.handleLoadImage } />
                        </Link>
                    )
                })}
            </Carousel>
        );
    }
}

export default MainBanners;
