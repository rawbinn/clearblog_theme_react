import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";

import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import About from './pages/About'

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" exact component={About} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
        </Switch>
    )
}

export default Routes