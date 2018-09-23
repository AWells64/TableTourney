import React, { Component } from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./data/store";
import AddPlayer from './containers/AddPlayer';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <AddPlayer />
      </Provider>
    );
  }
}

export default App;
