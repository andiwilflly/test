import React from "react";
import { Router, Redirect } from "@reach/router";
// Store
import store from "src/store";
// Pages
const HomePage = React.lazy(()=> import("src/components/pages/HomePage.component"));
const MarkupPage = React.lazy(()=> import("src/components/pages/MarkupPage.component"));


let NotFound = () => <div className="text-xl font-gotham_black uppercase flex justify-center items-center my-10">404</div>;


export default function RouterComponent() {
    return (
        <React.Suspense fallback={ <div>Loading...</div> }>
            <Router>
                <MarkupPage path="_markup" />

                <Redirect from="/" to={ `/${store.lang}`} noThrow />

                <HomePage path="/:lang" />

                <NotFound default />
            </Router>
        </React.Suspense>
    )
}
