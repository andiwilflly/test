import React from "react";
import { observer } from "mobx-react";
// Styles
import 'styles/scoped/Footer.scoped.scss';


@observer
class Footer extends React.Component {

    render() {
        return (
            <footer>
                FOOTER
            </footer>
        );
    }
}

export default Footer;