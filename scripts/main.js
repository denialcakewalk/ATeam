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
import StaffDetails from './components/StaffDetails';
import CheckOut from './components/CheckOut';
import StaffOut from './components/StaffOut';
import StaffIn from './components/StaffIn';


/*
 Routes
 */

var routes = (
    <Router history={createHistory()}>
        {/* <Route path="/" component={Dashboard}/>*/}
        <Route path="/PersonDetails" component={PersonDetails}/>
        <Route path="/VisitorDetails" component={VisitorDetails}/>
        <Route path="/StaffDetails" component={StaffDetails}/>
        <Route path="/CheckOut" component={CheckOut}/>
        <Route path="/StaffOut" component={StaffOut}/>
        <Route path="/StaffIn" component={StaffIn}/>


    </Router>
);

ReactDOM.render(routes, document.querySelector("#page-wrapper"));



