import React, { Component } from 'react';
//import {withRouter} from 'react-router-dom';

class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            pass: null
        };
    }


    txtEmail = (e) => {
        this.setState({
            email: e.target.value
        });
    }

    txtPass = (e) => {
        this.setState({
            pass: e.target.value
        });
    }

    btnLogin = () => {
        var userObj = {
            userEmail: this.state.email,
            userPass : this.state.pass
        };
        
        this.props.history.push({
            pathname: '/user/' + this.state.email,
            search: '?query=abc&grade=100',
            state: { userObj: userObj }
        });
    }

    render() {
        return (
            <div>
                HOME <br />
                EMAIL: <input type="text" placeholder='insert your mail...' onChange={this.txtEmail}/> <br />
                PASS:  <input type="password" placeholder="insert your pass..." onChange={this.txtPass}/> <br />
                <button onClick={this.btnLogin}>Login</button>
            </div>
        );
    }
}

export default  HomeComponent;