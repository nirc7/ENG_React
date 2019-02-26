import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//import { compileFunction } from 'vm';
import MyHeader from './MyHeader';
import StudentC from './Components/StudentC';
import StudentF from './Components/StudentF';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <img src={logo} className="App-logo" alt="logo" />
          <p>
            ruppin's app
          </p>
          <StudentF name='avi' age={30} hasCar={true} />
          <StudentF name='benny' />
          <br /><br />
          <StudentC name="charlie" factor={200} />
          {MyHeader}
          <button type="button" className="btn btn-danger">Danger</button>
        </header>
      </div>
    );
  }
}










//const MyHeader = (<div>shalom Ruppin</div>);

export default App;
