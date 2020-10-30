import React from "react";
import { Link } from "@reach/router";


class Header extends React.Component {

    render() {

        return (
            <header>
                <nav>
                    <Link to="/">Home</Link> | {" "}
                    <Link to="dashboard">Dashboard</Link>
                </nav>
            </header>
        );
    }
}

export default Header;