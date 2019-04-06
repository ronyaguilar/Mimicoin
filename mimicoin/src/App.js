import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {Header} from './components/header/Header.js';
import {Footer} from './components/Footer.js';
import {LandingPage} from './components/LandingPage.js';
import {CurrencyDashboard} from './components/dashboard/CurrencyDashboard';

import style from './App.module.scss';


class App extends Component {
  render() {
    return (
      <div style={{height: "100%"}}>
        <BrowserRouter>
          <div style={{height: "100%"}}>
            <Header />
            <Route exact path="/" component={LandingPage}/>
            <Route path="/dashboard" component={CurrencyDashboard}/>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
