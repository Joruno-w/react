import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import * as Pages from "./components/Pages";
import TransitionRoute from "./components/TransitionRoute";
import './App.css';

function App(props) {
    return (
        <Router>
            <div className="wrapper">
                <Pages.NavBar/>
                <div className="main">
                    <TransitionRoute path='/' exact component={Pages.Home}/>
                    <TransitionRoute path='/news' exact component={Pages.News}/>
                    <TransitionRoute path='/personal' exact component={Pages.Personal}/>
                </div>
            </div>
        </Router>
    );
}

export default App;