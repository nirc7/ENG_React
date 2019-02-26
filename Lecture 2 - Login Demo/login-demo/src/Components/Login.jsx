import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.txtName;
        this.txtPass;
    }

    txtNameCahnged = (e) => {
        this.txtName = e.target.value;
    }

    txtPassCahnged = (e) => {
        this.txtPass = e.target.value;
    }

    render() {
        return (
            <div>
                shalom<br />
                NAME:<input type="text" onChange={this.txtNameCahnged} /> <br />
                PASS:<input type="text" onChange={this.txtPassCahnged} /> <br />
                <input type="button" value="login" />
            </div>
        );
    }
}