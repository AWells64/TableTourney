import React, { Component, Fragment } from 'react';
import './App.css';
import AddPlayer from './components/AddPlayer';

class App extends Component {
  render() {
    return (
      <Fragment>
        <AddPlayer />
      </Fragment>
    );
  }
}

export default App;
