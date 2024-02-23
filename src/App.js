import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ReactGA from 'react-ga';

import Home from './components/Home'
import CardDetail from "./components/CardDetail";

const App = () => {
    ReactGA.initialize('G-C91FBSBC28');
    useEffect(() => {
        ReactGA.send({hitType: 'pageview', page: window.location.pathname + window.location.search, title: 'Home'});
    }, []);

    return(
        <Router>
            <Switch>
                <Route
                    exact path='/'
                    component={Home}
                >
                </Route>
                <Route
                    path='/user/:id'
                    component={CardDetail}
                >
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
