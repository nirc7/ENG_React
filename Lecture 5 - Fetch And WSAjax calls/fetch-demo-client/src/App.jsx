import React, { Component } from 'react';
import './App.css';

const SERVERURL = "http://localhost:63911/";

class App extends Component {



  btnGetUserByIDAndName = () => {

    const data = {
      id: 7,      //must be compatible with the WEB SERVICE parameters!!!
      name: 'avi' //must be compatible with the WEB SERVICE parameters!!!
    };

    fetch('http://localhost:63911/UsersWS.asmx/GetUserByIdAndName', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json;',
      }),
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log('res=', res);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          console.log("fetch POST.d= ", result.d);
          let u = JSON.parse(result.d);
          console.log(u.Address);
          console.log(u.ID);
          console.log(u.Name);
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  btnGetUserByIdFromSQL = () => {

    const data = {
      id: 2,      //must be compatible with the WEB SERVICE parameters!!!
    };

    fetch('http://localhost:63911/UsersWS.asmx/GetUserByIdFromSQL', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json;',
      }),
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log('res=', res);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          console.log("fetch POST.d= ", result.d);
          let u = JSON.parse(result.d);
          console.log(u.Address);
          console.log(u.ID);
          console.log(u.Name);
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  btnInsertUserToSQL = () => {
    const data = {
      name: 'noy',      //must be compatible with the WEB SERVICE parameters!!!
      address: 'troya'
    };

    fetch('http://localhost:63911/UsersWS.asmx/InsertUserToSQL', {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json;',
      }),
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log('res=', res);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          console.log("fetch POST.d= ", result.d);
          let u = JSON.parse(result.d);
          if (u != null) {
            console.log(u.Address);
            console.log(u.ID);
            console.log(u.Name);
          }
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  btnGetUserByIDAndNameUsingFetchCallFunc = () => {
    const data = {
      id: 3,      //must be compatible with the WEB SERVICE parameters!!!
      name: 'avi' //must be compatible with the WEB SERVICE parameters!!!
    };

    this.fetchCall('UsersWS.asmx', 'GetUserByIdAndName', data, this.successUser);
  }

  successUser(user) {
    if (user != null) {
      console.log(user.Address);
      console.log(user.ID);
      console.log(user.Name);
    } else {
      console.log('user is null:(');
    }
  }

  fetchCall(webServiceURL, functionName, data, returnFuncName) {

    fetch(`${SERVERURL}${webServiceURL}/${functionName}`, {
      method: 'post',
      headers: new Headers({
        'Content-Type': 'application/json;',
      }),
      body: JSON.stringify(data)
    })
      .then(res => {
        console.log('res=', res);
        return res.json()
      })
      .then(
        (result) => {
          console.log("fetch POST= ", result);
          console.log("fetch POST.d= ", result.d);
          let info = JSON.parse(result.d);
          returnFuncName(info);
        },
        (error) => {
          console.log("err post=", error);
        });
  }

  render() {
    return (
      <div className="App">
        <button
          style={{ margin: 20 }}
          onClick={this.btnGetUserByIDAndName}>GetUserByIDAndName</button> <br />
        <button
          style={{ margin: 20 }}
          onClick={this.btnGetUserByIDAndNameUsingFetchCallFunc}>GetUserByIDAndNameUsingFetchCallFunc</button> <br />
        <button
          style={{ margin: 20 }}
          onClick={this.btnGetUserByIdFromSQL}>GetUserByIdFromSQL</button> <br />
        <button
          style={{ margin: 20 }}
          onClick={this.btnInsertUserToSQL}>InsertUserToSQL</button>
      </div>
    );
  }
}

export default App;
