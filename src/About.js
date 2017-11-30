import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

const About = () => (
<div>
<section id="about">
    <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <h2>About our project!</h2>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 text-center">
                <p>The Plymouth Pub crawl is a web app that allows you to generate a pub crawl around the city of Plymouth. The app’s concept stems from the team’s love of drinking and pub crawls, we wanted an easy way to plan a pub crawl around Plymouth. This app is aimed at students like us who want to enjoy a pub crawl without the difficulty of planning it. You can select a random route or plan your own, where your favourite bars and pubs can be added. The app suggests a recommended drink for each bar or pub for the user to get an idea of what to order before even looking at the menu.</p>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 text-center">
                <h2 className="margin-30">The Team / The Drunkards!</h2>
            </div>
        </div>
        <div className="row">
           <div className="col-lg-3 text-center">
                <img className="img-responsive" src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/16472995_1438694069474734_6230078335142658535_n.jpg?oh=9620390212d11a69ea9fa458643024fb&oe=5AA4A5F6"/>
                <h3>Matt Dobson</h3>
            </div>
            <div className="col-lg-3 text-center">
                <img className="img-responsive" src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/16998783_1345689828786006_8937115136413001178_n.jpg?oh=ca3be499b491b5cdff4cb3187d7400fe&oe=5A9F1A92"/>
                <h3>Jay Lewis</h3>
            </div>
            <div className="col-lg-3 text-center">
                <img className="img-responsive" src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/11596_10154905469060459_1370186544983243527_n.jpg?oh=12a894be97f0fbf347943913a7cc3f40&oe=5A8D665F"/>
                <h3>Kev White</h3>
            </div>
            <div className="col-lg-3 text-center">
                <img className="img-responsive" src="https://scontent-lht6-1.xx.fbcdn.net/v/t31.0-8/18880172_1553197951371693_1026396606085490568_o.jpg?oh=ea1b3f65dcf989ec52828146a15d0b47&oe=5A988B3B"/>
                <h3>Ben Tiller</h3>
            </div>
        </div>
    </div>
</section>
</div>
)
export default About;
