import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {Header} from './components/header/Header.js';
import {Footer} from './components/Footer.js';
import {LandingPage} from './components/LandingPage.js';
import {CurrencyDashboard} from './components/dashboard/CurrencyDashboard';
import {CoinDashboard} from './components/dashboard/CoinDashboard';

import style from './App.module.scss';
import * as actions from './actions';

class App extends Component {
  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <div style={{height: "100%"}}>
        <BrowserRouter>
          <div style={{height: "100%", width:'100%'}}>
            <Header />
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/dashboard" component={CurrencyDashboard}/>
            <Route path="/coin/:label" component={CoinDashboard}/>
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
