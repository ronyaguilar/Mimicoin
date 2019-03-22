import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import {Header} from './components/Header.js';
import style from './App.module.scss';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />
            {/*<Route exact path="/" component={LandingSection}/>*/}
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
