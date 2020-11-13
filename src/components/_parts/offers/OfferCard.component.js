import React from "react";
import PropTypes from "prop-types";
// Styles
import "src/styles/scoped/offers/OffersCard.scoped.scss";
// MobX
import { observer } from "mobx-react";
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



    render() {
        return (
            <div className="offer-card">
                <div className="offer-time flex:center">
                    <Img src={`${process.env.PUBLIC_URL}/svg/clock.svg`} width={21} height={21} />
                    <span>15:00 - 20:00</span>
                </div>

                <div className="offer-discount flex:center">
                    { this.props.offer.discount }
                </div>
                <Img src={ this.props.offer.img } onLoad={ ()=> this.props.$carousel?.setDimensions() } width="100%" />

                <div className="offer-details flex:between:center">
                    <div className="offer-name">{ this.props.offer.name }</div>
                    <div className="offer-price flex:between:center">
                        <div className="offer-old-price">{ this.props.offer.oldPrice } грн</div>
                        <div className="offer-new-price">{ this.props.offer.newPrice } грн</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OfferCard;
