import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import './App.scss';
import Listas from './lista/Listas';
import Lista from './lista/Lista';


class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Switch>
            <Route exact path = "/" component = {Listas}/>
            <Route exact path = "/" component = {Lista}/>

          </Switch>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;