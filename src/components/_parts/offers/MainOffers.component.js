import React from "react";
// MobX
import { observable } from "mobx";
import { observer } from "mobx-react";
// Decorators
import WithSWR from "src/decorators/WithSWR.decorator";
// Components
import MainOffersSavingSlider from "src/components/_parts/offers/MainOffersSavingSlider.component";
import OffersSlider from "src/components/_parts/offers/OffersSlider.component";
import { Desktop, Tablet, Mobile } from "src/components/_parts/MediaQuery.component";


@WithSWR({
    url: "/api/mainOffers",
    name: 'mainOffers'
})
@observer
class MainOffers extends React.Component {

    @observable mainOffers = null;


    render() {
        return (
            <div>
                <MainOffersSavingSlider offers={ this.props.mainOffers.saving } />


                <Desktop>
                    <div style={{ height: 110 }} />
                    <h3 className="flex:center mb40">Закажи на завтрак</h3>
                    <OffersSlider offers={this.props.mainOffers.breakfast } slidesToShow={3} />

                    <div style={{ height: 110 }} />
                    <h3 className="flex:center mb40">Закажи на обед</h3>
                    <OffersSlider offers={ this.props.mainOffers.dinner } slidesToShow={3} />

                    <div style={{ height: 110 }} />
                    <h3 className="flex:center mb40">Закажи на ужин</h3>
                    <OffersSlider offers={ this.props.mainOffers.supper } slidesToShow={3} />
                </Desktop>

                <Tablet>
                    <div style={{ height: 110 }} />
                    <h3 className="flex:center mb40">Закажи на завтрак</h3>
                    <OffersSlider offers={this.props.mainOffers.breakfast } slidesToShow={2} />

                    <div style={{ height: 110 }} />
                    <h3 className="flex:center mb40">Закажи на обед</h3>
                    <OffersSlider offers={ this.props.mainOffers.dinner } slidesToShow={2} />

                    <div style={{ height: 110 }} />
                    <h3 className="flex:center mb40">Закажи на ужин</h3>
                    <OffersSlider offers={ this.props.mainOffers.supper } slidesToShow={2} />
                </Tablet>

                <Mobile>
                    <div style={{ height: 110 }} />
                    <h3 className="flex:center mb40">Закажи на завтрак</h3>
                    <OffersSlider offers={this.props.mainOffers.breakfast } slidesToShow={2} />

                    <div style={{ height: 110 }} />
                    <h3 className="flex:center mb40">Закажи на обед</h3>
                    <OffersSlider offers={ this.props.mainOffers.dinner } slidesToShow={2} />

                    <div style={{ height: 110 }} />
                    <h3 className="flex:center mb40">Закажи на ужин</h3>
                    <OffersSlider offers={ this.props.mainOffers.supper } slidesToShow={2} />
                </Mobile>
            </div>
        );
    }
}

export default MainOffers;
