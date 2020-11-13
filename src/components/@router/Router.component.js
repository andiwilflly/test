import React from "react";
import { Router, Redirect } from "@reach/router";
// Store
import store from "src/store";
// Pages
const HomePage = React.lazy(()=> import("src/components/pages/HomePage.component"));
const TestPage = React.lazy(()=> import("src/components/pages/TestPage.component"));


let NotFound = () => <div>404</div>


export default function RouterComponent() {
    return (
        <React.Suspense fallback={ <div>Loading...</div> }>
            <Router>
                <Redirect from="/" to={ `/${store.lang}`} noThrow />
                <HomePage path="/:lang" />
                <TestPage path="dashboard" />
                <NotFound default />
            </Router>
        </React.Suspense>
    )
}
