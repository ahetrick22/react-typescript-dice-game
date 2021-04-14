import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { NotFound } from "./pages/NotFound";
import {Home} from "./pages/Home";

export default function App() {

    return (
        <Router>
                <Switch>
                    <Route
                        path={'/'}
                        exact
                    >
                        <Home />
                    </Route>
                    <Route>
                        <NotFound />
                    </Route>
                </Switch>
        </Router>
    );
}
