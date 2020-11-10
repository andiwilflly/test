import React from "react";
import { Router } from "@reach/router";
// Pages
const HomePage = React.lazy(()=> import("src/components/pages/HomePage.component"));
const TestPage = React.lazy(()=> import("src/components/pages/TestPage.component"));


let NotFound = () => <div>404</div>


export default function RouterComponent() {
    return (
        <React.Suspense fallback={ <div>Loading...</div> }>
            <Router>
                <HomePage path="/" />
                <TestPage path="dashboard" />
                <NotFound default />
            </Router>
        </React.Suspense>
    )
}