import React, { Component } from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./data/store";
import Setup from './containers/Setup';
import Bracket from './containers/Bracket';
import FourOhFour from './components/FourOhFour';
import CurrentGame from './containers/CurrentGame';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={ store }>
          <React.Fragment>
            <Switch>
              <Route exact path="/" component={ Setup } />
              <Route exact path="/bracket" component={ Bracket } />
              <Route exact path="/bracket" component={ CurrentGame } />
              <Route component={ FourOhFour }/>
            </Switch>
          </React.Fragment>
        </Provider>
      </Router>
    );
  }
}

export default App;
