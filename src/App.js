import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './components/Home'
import CardDetail from "./components/CardDetail";

const App = () => {

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
