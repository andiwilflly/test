import React from "react";
// MobX
import { observable, computed } from "mobx";
import { observer } from "mobx-react";
// Decorators
import WithSWR from "src/decorators/WithSWR.decorator";
// Store
import store from "src/store";
// Components
import MainOffersSavingSlider from "src/components/_parts/offers/MainOffersSavingSlider.component";
import OffersSlider from "src/components/_parts/offers/OffersSlider.component";


@WithSWR({
    url: "/api/mainOffers",
    name: 'mainOffers'
})
@observer
class MainOffers extends React.Component {

    @observable mainOffers = null;


    @computed get slidesToShow() {
        return store.breakpoint === 'desktop' ?
            3
            :
            store.breakpoint === 'tablet' ?  2 : 1;
    }


    render() {
        return (
            <div>
                <MainOffersSavingSlider offers={ this.props.mainOffers.saving } />

                <div style={{ height: 77 }} />
                <h3 className="flex text-lg font-gotham font-semibold items-center justify-center mb-5">Закажи на завтрак</h3>
                <OffersSlider offers={this.props.mainOffers.breakfast } slidesToShow={ this.slidesToShow } />

                <div style={{ height: 77 }} />
                <h3 className="flex text-lg font-gotham font-semibold items-center justify-center mb-5">Закажи на обед</h3>
                <OffersSlider offers={ this.props.mainOffers.dinner } slidesToShow={ this.slidesToShow } />

                <div style={{ height: 77 }} />
                <h3 className="flex text-lg font-gotham font-semibold items-center justify-center mb-5">Закажи на ужин</h3>
                <OffersSlider offers={ this.props.mainOffers.supper } slidesToShow={ this.slidesToShow } />
            </div>
        );
    }
}

export default MainOffers;
