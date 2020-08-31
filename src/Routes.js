import React from "react";
import {
    Switch,
    Route,
} from "react-router-dom";

import Signup from './pages/Signup'
import Login from './pages/Login'
import Home from './pages/Home'
import SinglePost from "./pages/SinglePost";
import Page from "./pages/Page";

const Routes = () => {
    return (
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/:slug" exact component={Page} />
            <Route path="/login" exact component={Login} />
            <Route path="/signup" exact component={Signup} />
            <Route exact path="/post/:id" component={SinglePost} />
        </Switch>
    )
}

export default Routes