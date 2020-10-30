import { Router } from "@reach/router";


let Home = () => <div>Home</div>
let Dash = () => <div>Dash</div>
let NotFound = () => <div>404</div>


export default function RouterComponent() {
    return (
        <Router>
            <Home path="/" />
            <Dash path="dashboard" />
            <NotFound default />
        </Router>
    )
}