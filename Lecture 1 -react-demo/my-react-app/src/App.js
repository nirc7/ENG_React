import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//import { compileFunction } from 'vm';
import MyHeader from './MyHeader';
import StudentC from './StudentC';



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





//functional component
function StudentF(props) {
  //props.name="stam"; //ERROR IMMUTABLE!
  //debugger;
  //console.log(props.age);
  let number;

  function btnClicked() {
    alert(number);
  }

  function txtChenged(e) {
    number = e.target.value;
  }
  
  return (
    <div className="container">
      <h3>hello my name is {props.name} </h3>
      <h4>and i am a student</h4>
      <div>age = {props.age}</div>
      <button type="button" 
        onClick={btnClicked} className="btn btn-danger"
      >show number</button>
      <input type="text" 
        placeholder="insert your number"
        onChange={txtChenged} />


    </div>);
}




//const MyHeader = (<div>shalom Ruppin</div>);

export default App;
