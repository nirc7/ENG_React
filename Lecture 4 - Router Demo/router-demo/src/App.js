import React, { Component } from 'react';
import './App.css';
import {Route, Link} from 'react-router-dom';

import HomeComponent from './Components/HomeComponent.jsx';
import UserComponent from './Components/UserComponent';
import AboutComponent from './Components/AboutComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div >
          <Link to="/" >Home</Link> | 
          <Link to="/user" >User</Link> |
          <Link to="/about" >About</Link>  <br /><br />
        </div>
        <div>
          <Route exact path="/" component={HomeComponent} />
          <Route path="/about" component={AboutComponent} />
          <Route path="/user/:useremail" component={UserComponent} />
        </div>
      </div>
    );
  }
}

export default App;
