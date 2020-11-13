import React from "react";
import PropTypes from "prop-types";
// MobX
import { observer } from "mobx-react";
// Styles
import "src/styles/scoped/offers/MainOffersSavingSlider.scoped.scss";
// Components
import OffersSlider from "src/components/_parts/offers/OffersSlider.component";
import { Desktop, Tablet, Mobile } from "src/components/_parts/MediaQuery.component";


@observer
class MainOffersSavingSlider extends React.Component {

    static propTypes = {
        offers: PropTypes.array.isRequired
    };


    render() {
        return (
            <div className="saving-offer">
                <div className="saving-info">
                    <div className="saving-title">С нами ты экономишь</div>

                    <div className="saving-description">
                        Asd ekwr jkwenf cksdnck sdkc msdcks dmkfner terg fd??
                    </div>

                    <button className="button:green">Смотреть все</button>
                </div>
                <div className="saving-offers">
                    <Desktop>
                        <OffersSlider offers={ this.props.offers } slidesToShow={2} />
                    </Desktop>
                    <Tablet>
                        <OffersSlider offers={ this.props.offers } slidesToShow={1} />
                    </Tablet>
                    <Mobile>
                        <OffersSlider offers={ this.props.offers } slidesToShow={1} />
                    </Mobile>
                </div>
            </div>
        );
    }
}

export default MainOffersSavingSlider;
