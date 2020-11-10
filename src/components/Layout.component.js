import React from "react";
import { observer } from "mobx-react";
import MediaQuery from 'react-responsive';
import Carousel from 'nuka-carousel';
// Styles
import "styles/scoped/Layout.scoped.scss";
// Components
import Router from 'components/@router/Router.component';


@observer
class Layout extends React.Component {

    render() {

        return (
            <section className="layout">

                <MediaQuery minWidth={725}>
                    <p>You are a desktop or laptop</p>
                </MediaQuery>

                <MediaQuery minWidth={700} maxWidth={724}>
                    <p>524</p>
                </MediaQuery>

                    {/*<Carousel initialSlideHeight={200}>*/}
                    {/*    <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide1" />*/}
                    {/*    <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide2" />*/}
                    {/*    <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide3" />*/}
                    {/*    <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide4" />*/}
                    {/*    <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide5" />*/}
                    {/*    <img src="https://via.placeholder.com/400/ffffff/c0392b/&text=slide6" />*/}
                    {/*</Carousel>*/}


                <Router />
            </section>
        );
    }
}

export default Layout;