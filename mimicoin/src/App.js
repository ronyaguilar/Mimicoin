import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {Header} from './components/header/Header.js';
import {Footer} from './components/Footer.js';
import {LandingPage} from './components/LandingPage.js';
import {CurrencyTable} from './components/dashboard/CurrencyTable.js';

import style from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div style={{height: "100%"}}>
        <BrowserRouter>
          <div style={{height: "100%"}}>
            <Header />
            <Route exact path="/" component={LandingPage}/>
            <Route path="/dashboard" component={CurrencyTable}/>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
