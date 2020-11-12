import React from "react";
// MobX
import { observable } from "mobx";
import { observer } from "mobx-react";
// Store
import store from "src/store";
// Components
import MainOffersSavingSlider from "src/components/_parts/offers/MainOffersSavingSlider.component";


@observer
class MainOffers extends React.Component {

    @observable mainOffers = null;


    componentDidMount() {
        this.fetchOffers();
    }


    async fetchOffers() {
        let response = await store.auth.fetch('/api/mainOffers');
        response = await response.json();
        this.mainOffers = response;
    }


    render() {
        if(!this.mainOffers) return null;
        return (
            <div>
                <MainOffersSavingSlider offers={ this.mainOffers.saving } />
                <div style={{ height: 100 }} />
            </div>
        );
    }
}

export default MainOffers;