import React from "react";
import PropTypes from "prop-types";
// MobX
import { observer } from "mobx-react";
// Components
import OffersSlider from "src/components/_parts/offers/OffersSlider.component";


@observer
class MainOffersSavingSlider extends React.Component {

    static propTypes = {
        offers: PropTypes.array.isRequired
    }


    render() {
        return (
            <div className="offers">
                MainOffersSavingSlider
                <OffersSlider offers={ this.props.offers } slidesToShow={2} />
            </div>
        );
    }
}

export default MainOffersSavingSlider;