import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Auth from "./components/Auth";
import HomePage from './pages/home';
import CallbackPage from './pages/callback';
import DashboardPage from './pages/dashboard';

function App() {
    return (
        <div className="App container">
            <Auth>
                <div className="jumbotron">
                    <Router>
                        <Switch>
                            <Route exact path="/" component={ HomePage } />
                            <Route path="/dashboard" component={ DashboardPage } />
                            <Route path="/callback" component={ CallbackPage } />
                        </Switch>
                    </Router>
                </div>
            </Auth>
        </div>
    );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
