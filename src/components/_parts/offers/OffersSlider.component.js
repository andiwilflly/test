import React from "react";
import PropTypes from "prop-types";
import Carousel from 'nuka-carousel';
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
    @observable currentSlider = 1;


    $carousel = null;


    onSliderReady = ($ref)=> {
        this.isSliderReady = true;
        this.$carousel = $ref;
    };


    render() {
        return (
            <div className="offers-slider">
                <Carousel width='100%'
                          defaultControlsConfig={{
                              pagingDotsContainerClassName: 'offers-slider-dots-wrapper',
                              nextButtonText: ' ',
                              prevButtonText: ' '
                          }}
                          disableEdgeSwiping
                          ref={ this.onSliderReady }
                          cellSpacing={20}
                          afterSlide={ (currentSlider)=> this.currentSlider = currentSlider+1 }
                          heightMode="max"
                          slidesToShow={ this.props.slidesToShow }
                          slidesToScroll={ this.props.slidesToScroll }
                          slideWidth={1}>
                    { this.props.offers.map(offer => <OfferCard key={this.isSliderReady + offer.id} $carousel={ this.$carousel } offer={ offer } />) }
                </Carousel>

                <div className="offers-slider-counter">
                    { this.currentSlider }/<span>{ Math.ceil(this.props.offers.length / this.props.slidesToShow) }</span>
                </div>
            </div>
        );
    }
}

export default OffersSlider;
