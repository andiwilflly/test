import React from "react";
// botAI
import "./components/botAI/botAI";
// Components
import Header from "components/Header.component";
import Layout from "components/Layout.component";
import Footer from "components/Footer.component";


class App extends React.Component {

    componentDidMount() {
        window.fetch("/api/user")
            .then((res) => res.json())
            .then((json) => {
                console.log(json, 4242);
            })
    }

    render() {

        return (
            <>
                <Header />
                <Layout />
                <Footer />
            </>
        );
    }
}

export default App;
