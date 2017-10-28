import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Switch, Route } from 'react-router-dom';

import TaskList from './TaskList';
import DetailView from './DetailView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to James' React Assessment Tasks App</h1>
        </header>
        <div>
          <Switch>
            <Route component={TaskList} exact path="/" />
            <Route component={DetailView} path="/:task_id" />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;