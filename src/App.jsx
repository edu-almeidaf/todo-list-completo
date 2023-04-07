import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ComProps from './todo-list-com-props/ComProps';
import SemProps from './todo-list-sem-props/SemProps';
import ComRedux from './todo-list-com-redux/ComRedux';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ SemProps } />
        <Route exact path="/com-props" component={ ComProps } />
        <Route exact path="/com-redux" component={ ComRedux } />
      </Switch>
    );
  }
}

export default App;
