import React from "react";
import { observer } from "mobx-react";
// Styles
import "styles/scoped/Layout.scoped.scss";
// Components
import Router from 'components/@router/Router.component';


@observer
class Layout extends React.Component {


    render() {

        return (
            <section id="layout">
                <Router />
            </section>
        );
    }
}

export default Layout;
