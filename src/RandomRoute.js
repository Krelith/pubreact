import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const RandomRoute = () => (
<div>
<section id="form" ng-controller="mycontroller" ng-app="myApp">
    <div className="container text-center">
        <div className="row">
            <div className="col-lg-3">
                <h4>Start Point</h4>
                <select id="start">
                    <option>Select a starting point...</option>
                </select>
            </div>
              <div className="col-lg-3">
                <h4>Pubs In Between</h4>
                <select id="numberPubs">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                </select>
            </div>
              <div className="col-lg-3">
                <h4>End Point</h4>
                <select id="end">
                    <option>Choose an end point...</option>
                </select>
            </div>
              <div className="col-lg-3 text-center">
                <input type="submit" id="submit" value="Generate Pub Crawl!"/>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
                <p>After generating your pub crawl, scroll down to see the route!</p>
            </div>
        </div>
    </div>
</section>

  <section id="refresh-map">
      <div className="container text-center">
          <div className="row">
              <div className="col-sm-12">
                  <p>Having issues with the map? Click 'Regenerate Map!'
                  <input type="button" onClick="history.go(0)" value="Regenerate Map" className="align-right"/></p>
              </div>
          </div>
      </div>
  </section>

  <div id="map"></div>

  <section id="route" className="text-center">
      <ul className="pub-route">
          <div id="start-point-list"></div>
          <div id="pub_list"></div>
          <div id="end-point-list"></div>
      </ul>
  </section>
</div>
)

export default RandomRoute;
