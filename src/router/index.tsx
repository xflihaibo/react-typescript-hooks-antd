import * as React from 'react';
import * as ReactRouter from 'react-router-dom';
const { Route, BrowserRouter: Router } = ReactRouter;
import history from './history';
import Home from '../view/home/index';
import Login from '../view/login/index';

console.log(history);

const RouterPage = () => {
    return (
        <Router>
            <Route path="/home" exact component={Home} />
            <Route path="/login" exact component={Login} />
        </Router>
    );
};

export default RouterPage;
