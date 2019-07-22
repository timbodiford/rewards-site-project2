import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Users from './components/Users'
import './App.css';
import Header from './components/Header';
import SingleUser from './components/SingleUser';

function App() {
  return (
    <div className="App">
      <Header />
    
      <Router>
        <Switch>
          <Route exact path="/" component={Users} />
          <Route path="/users/:userId" component={SingleUser} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
