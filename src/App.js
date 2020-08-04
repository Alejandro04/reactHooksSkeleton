import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Client from "./pages/Client";
import Login from "./pages/Login";
import Auth from "./context/store/Auth";

function App() {
    return (
        <Auth>
            <BrowserRouter>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" component={Dashboard} />
                    <Route path="/clients" component={Client} />
                </Switch>
            </BrowserRouter>
        </Auth>
    );
}

export default App;
