import {
    HashRouter as Router,
    Switch,
    Route, Redirect
} from "react-router-dom";
import App from "../page/index/App";


export default function router() {
    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <App />
                </Route>

                <Route path="*">
                    <Redirect to="/" />
                </Route>
            </Switch>
        </Router>
    );
}