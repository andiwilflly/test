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
            <section className="layout">
                <Router />
                <hr/>
                - store.mediaQuery [mobile, tablet, desktop]
                - axios
                <hr/>
            </section>
        );
    }
}

export default Layout;