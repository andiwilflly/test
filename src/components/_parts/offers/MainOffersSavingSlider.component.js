import React from "react";
import PropTypes from "prop-types";
// MobX
import { observer } from "mobx-react";
// Styles
import "src/styles/scoped/offers/MainOffersSavingSlider.scoped.scss";
// Store
import store from "src/store";
// Components
import OffersSlider from "src/components/_parts/offers/OffersSlider.component";


@observer
class MainOffersSavingSlider extends React.Component {

    static propTypes = {
        offers: PropTypes.array.isRequired
    };


    render() {
        return (
            <div className="saving-offer">
                <div className="saving-info">
                    <h3>С нами ты экономишь</h3>

                    <div className="saving-description">
                        Asd ekwr jkwenf cksdnck sdkc msdcks dmkfner terg fd??
                    </div>

                    <button className="button:green">Смотреть все</button>
                </div>
                <div className="saving-offers">
                    <OffersSlider offers={ this.props.offers } slidesToShow={ store.breakpoint === 'desktop' ? 2 : 1 } />
                </div>
            </div>
        );
    }
}

export default MainOffersSavingSlider;
