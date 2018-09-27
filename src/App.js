import React, { Component } from 'react';
import './styles/App.css';
import { Provider } from "react-redux";
import store from "./data/store";
import Setup from './containers/Setup';
import Bracket from './containers/Bracket';
import FourOhFour from './components/FourOhFour';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={ store }>
          <React.Fragment>
              <Route exact path="/" component={ Setup } />
              <Route exact path="/" component={ Bracket } />
              {/* <Route component={ FourOhFour }/> */}
          </React.Fragment>
        </Provider>
      </Router>
    );
  }
}

export default App;
