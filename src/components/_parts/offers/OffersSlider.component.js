import React from "react";
import PropTypes from "prop-types";
import Carousel from 'nuka-carousel';
// Styles
import "src/styles/scoped/offers/OffersSlider.scoped.scss";
// MobX
import { observer } from "mobx-react";
import { observable } from "mobx";
// Components
import OfferCard from "src/components/_parts/offers/OfferCard.component";


@observer
class OffersSlider extends React.Component {

    static propTypes = {
        offers: PropTypes.array.isRequired,
        slidesToShow: PropTypes.number,
        slidesToScroll: PropTypes.number
    };


    static defaultProps = {
        slidesToShow: 3,
        slidesToScroll: 1
    };


    @observable isSliderReady = false;

    $carousel = null;


    onSliderReady = ($ref)=> {
        this.isSliderReady = true;
        this.$carousel = $ref;
    };


    render() {
        return (
            <div className="offers-slider">
                <Carousel width='100%'
                          ref={ this.onSliderReady }
                          cellSpacing={20}
                          slidesToShow={ this.props.slidesToShow }
                          slidesToScroll={ this.props.slidesToScroll }
                          slideWidth={1}>
                    { this.props.offers.map(offer => <OfferCard key={this.isSliderReady + offer.id} $carousel={ this.$carousel } offer={ offer } />) }
                </Carousel>
            </div>
        );
    }
}

export default OffersSlider;
