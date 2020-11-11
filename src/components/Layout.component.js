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

                {/*<MediaQuery minWidth={725}>*/}
                {/*    <p>You are a desktop or laptop</p>*/}
                {/*</MediaQuery>*/}

                {/*<MediaQuery minWidth={700} maxWidth={724}>*/}
                {/*    <p>524</p>*/}
                {/*</MediaQuery>*/}


                <Router />
            </section>
        );
    }
}

export default Layout;