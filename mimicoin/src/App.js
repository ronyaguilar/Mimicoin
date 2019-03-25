import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import {Header} from './components/header/Header.js';
import {LandingPage} from './components/LandingPage.js';

import style from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={LandingPage}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
