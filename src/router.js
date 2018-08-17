import React, { Component } from 'react';

import App from './App';
import Admin from './Admin';
import Login from './Login';
import Content from './_platform/layout/Content/Content';
import NoMatch from './NoMatch/NoMatch';
import Dashboard from './Dashboard/Dashboard';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

export default class IRouter extends Component {
    render() {
        return (
            <BrowserRouter>
                <App>
                    <Route path="/login" component={Login} />
                    <Route
                        path="/"
                        render={() => (
                            <Admin>
                                <Switch>
                                    <Route path="/home" component={Content} />
                                    <Route path="/dashboard" component={Dashboard} />
                                    <Redirect to="/home" />
                                    {/* <Route component={NoMatch} /> */}
                                </Switch>
                            </Admin>
                        )}
                    />
                </App>
            </BrowserRouter>
        );
    }
}
