import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const OwnRoute = () => (
<div>
  <section id="form">
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
                  <select multiple id="waypoints"></select>
                  <p className="ctrlClick">Ctrl + Click or Shift Click to select!</p>
              </div>

              <div className="col-lg-3">
                  <h4>End Point</h4>
                  <select id="end">
                      <option>Choose an end point...</option>
                  </select>
              </div>

              <div className="col-lg-3 text-center">
                  <input type="submit" id="submit2" value="Generate Pubcrawl!"/>
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

export default OwnRoute;
