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
                <div className='flex flex-wrap align-bottom'>
                    {/* Align bottom hack */}
                    <div />
                    <div>
                        <div className="text-lg font-gotham font-semibold">С нами ты экономишь</div>
                        <div className="offer-text text-base">текст текст текст текст текстте ксттек сттекстте  текстте ксттек сттекстте кс кстт ексттекстте ксттекстте ксттекстте ксттекст</div>
                        <button className="button">Смотреть все</button>
                    </div>
                </div>

                <OffersSlider offers={ this.props.offers } slidesToShow={ store.breakpoint === 'desktop' ? 2 : 1 } />
            </div>
        );
    }
}

export default MainOffersSavingSlider;
