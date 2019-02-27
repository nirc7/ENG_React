import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login.jsx';
import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';


class App extends Component {
  render() {
    return (
      <div className="App">
        App
        {Header}
        <Login />
        <Footer name='avi'/>
      </div>
    );
  }
}

export default App;
