import React, { Component } from 'react';
import Child from './Child.jsx';
import FormElements from './FormElements';

export default class Login extends Component {
    constructor(props) {
        super(props);

        //local variable:
        let num = 8;

        //Fields:
        this.txtNameValue = "";
        this.txtPassValue = "";
        this.res = ",,,";

        this.state =
            {
                resLabel: '...',
                show: false
            };
    }

    btnLogin = () => {
        //debugger;
        // alert(1);
        console.log(2);
        console.log(this.props.name);

        if (this.txtNameValue == 'avi' && this.txtPassValue == '123') {
            this.setState({
                resLabel: 'you r logged in!',
                show: true
            },()=>{ alert('setState was finished to run!') }); //run code AFTER setstate finished running!!!
            this.res = "yes";
        } else {
            this.setState({
                resLabel: 'you r not logged in!',
                show: false
            });
        }

        //worng!!! - must use state in order to render again!!!
        // if (this.txtNameValue=='avi' && this.txtPassValue=='123') {
        //     this.res = "yes";
        //     alert('yes');
        // } else {
        //     this.res = "no";
        // }
    }

    txtNameChanged = (e) => {
        this.txtNameValue = e.target.value;
        console.log(this.txtNameValue);
    }

    txtPassChanged = (e) => {
        this.txtPassValue = e.target.value;
        console.log(this.txtPassValue);
    }

    getData = (data) => {
        alert('from parent with data from child =' + data);
        this.setState({
            childName: data
        });
    }

    render() {
        /*opt2*/
        let lbl;
        if (this.state.show) {
            lbl = <div style={{ color: 'green' }}>yes u r logged in:)</div>;
        }

        return (
            <div>login <br /><br />
                NAME:<input type="text" onChange={this.txtNameChanged} /><br /><br />
                PASS:<input type="text" onChange={this.txtPassChanged} /><br /><br />
                <input type="button" value="push" onClick={this.btnLogin} /><br /><br />
                r u logged in? <div style={{}} > {this.state.resLabel} </div><br /><br />
                {this.res}<br /><br />
                {lbl}<br /><br />
                {/*opt1*/this.state.show && <div style={{ color: 'red', fontSize: 40 }}>yes u r logged in:)</div>}<br /><br />
                {/*opt1*/!this.state.show && "?;"}<br /><br />
                {/*opt3*/ this.state.show ? <div style={{ color: 'red', fontSize: 40 }}>yes u r logged in:)</div> : "?:"}<br /><br />
                <Child sendData={this.getData}/><br/><br/>
                SHALOM={this.state.childName} <br/><br/> 
                <FormElements/>
            </div>
        );
    }
}

