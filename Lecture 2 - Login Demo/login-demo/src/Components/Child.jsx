import React, { Component } from 'react'

export default class Child extends Component {
    constructor(props) {
        super(props);
        this.txtValue=null;
    }

    txtName = (e) => {
        this.txtValue = e.target.value;
    }

    btnSendDataToParent = () => {
        this.props.sendData(this.txtValue);
    }

    render() {
        return (
            <div style={
                {
                    border: '2px solid black',
                    margin: 20,
                    padding:20
                }}>
                Child  Component <br /><br />
                <input type="text" onChange={this.txtName} />
                <button onClick={this.btnSendDataToParent}>push</button>
            </div>
        )
    }
}


