import React from "react";
// Components
import Router from 'components/@router/Router.component';


class Layout extends React.Component {

    render() {

        return (
            <section className="layout">

                <div className="row">
                    <div className="col-xs-12
                col-sm-8
                col-md-6
                col-lg-4">
                        <div className="box" style={{ background: 'red' }}>Responsive</div>
                    </div>
                </div>

                <div className="row top-xs">
                    <div className="col-xs-6">
                        <div className="box" style={{ background: 'blue' }}>
                            top
                        </div>
                    </div>

                    <div className="col-xs-6">
                        <div className="box" style={{ background: 'orange' }}>
                            top
                        </div>
                    </div>
                </div>


                <Router />
            </section>
        );
    }
}

export default Layout;