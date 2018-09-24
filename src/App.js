import React, { Component } from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./data/store";
import Setup from './containers/Setup';
import Bracket from './containers/Bracket';
import CurrentGame from './containers/CurrentGame';

class App extends Component {
  render() {
    return (
        <Provider store={ store }>
          <React.Fragment>
            <Setup />
            <Bracket />
            <CurrentGame />
          </React.Fragment>
        </Provider>
    );
  }
}

export default App;
