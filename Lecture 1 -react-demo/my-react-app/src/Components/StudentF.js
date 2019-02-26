import React from 'react';

//functional component
export default function StudentF(props) {
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