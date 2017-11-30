import React from 'react';
import './App.css';
import RandomRoute from './RandomRoute';
import OwnRoute from './OwnRoute';
import About from './About';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const RenderApp = () => (

<Router>
  <div>
    <nav className="navbar navbar-expand-sm navbar-dark">
        <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span></button>


            <a className="navbar-brand" href="#">The Plymouth Pub Crawl</a>


            <div className="collapse navbar-collapse justify-content-end" id="nav-content">

                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link" onClick="history.go(0)">Plan a random route!</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/custom" className="nav-link" onClick="history.go(0)">Plan your own route!</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/about" className="nav-link">About Us</Link>
                    </li>
                </ul>

            </div>

        </div>

    </nav>
    <Route exact path="/" component={RandomRoute}/>
    <Route path="/custom" component={OwnRoute}/>
    <Route path="/about" component={About}/>
  </div>
</Router>
)

export default RenderApp;
