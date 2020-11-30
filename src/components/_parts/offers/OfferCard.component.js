import React from "react";
import PropTypes from "prop-types";
// Styles
import "src/styles/scoped/offers/OffersCard.scoped.scss";
// MobX
import { observer } from "mobx-react";
// Store
import store from "src/store";
// Components
import Img from "src/components/_parts/Img.component";


@observer
class OfferCard extends React.Component {

    static propTypes = {
        offer: PropTypes.object.isRequired,
        $carousel: PropTypes.object
    };


    static defaultProps = {
        $carousel: null
    };



    get startDateTime() { return new Date(this.props.offer.startDateTime).toLocaleTimeString().split(':') }
    get endDateTime() { return new Date(this.props.offer.endDateTime).toLocaleTimeString().split(':') }



    render() {
        return (
            <div className="offer-card">
                <div className="offer-time flex items-center justify-center">
                    <Img src={`${process.env.PUBLIC_URL}/svg/clock.svg`} width={21} height={21} />
                    <span>{ this.startDateTime[0] }:{ this.startDateTime[1] } - { this.endDateTime[0] }:{ this.endDateTime[1] }</span>
                </div>

                <div className="offer-discount flex items-center justify-center text-black bg-yellow_dark rounded-full">
                    -{ this.props.offer.discount }%
                </div>
                <Img src={ this.props.offer.imageUrl }
                     style={{ objectFit: 'cover' }}
                     onLoad={ ()=> this.props.$carousel?.setDimensions() }
                     heightRatio={ 0.603 }
                     width="100%" />

                <div className="offer-details flex items-center justify-between">
                    <div className="offer-name">
                        { this.props.offer.translations.find(translation => translation.lang === store.lang).name }
                    </div>
                    <div className="offer-price flex items-center justify-between">
                        <div className="offer-old-price">{ this.props.offer.discountPrice } грн</div>
                        <div className="offer-new-price">{ this.props.offer.price } грн</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OfferCard;
