import React, { Component } from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./data/store";
import Setup from './components/Setup';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <Setup />
      </Provider>
    );
  }
}

export default App;
