import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import {Home} from "./pages/Home";
import { ChakraProvider } from "@chakra-ui/react"

export default function App() {

    return (
        <ChakraProvider>
            <Router>
                    <Switch>
                        <Route>
                            <Home />
                        </Route>
                    </Switch>
            </Router>
        </ChakraProvider>
    );
}
