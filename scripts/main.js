import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route} from 'react-router';
import {createHistory} from 'history';

/*
 Components
 */
import Dashboard from './components/Dashboard';
import PersonDetails from './components/PersonDetails';
import VisitorDetails from './components/VisitorDetails';

/*
 Routes
 */

var routes = (
    <Router history={createHistory()}>
        <Route path="/" component={Dashboard}/>
        <Route path="/PersonDetails" component={PersonDetails}/>
        <Route path="/VisitorDetails" component={VisitorDetails}/>

    </Router>
);

ReactDOM.render(routes, document.querySelector("#page-wrapper"));



