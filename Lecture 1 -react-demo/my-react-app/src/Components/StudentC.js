import React, { Component } from 'react';

export default class StudentC extends Component {
    constructor(props) {
        super(props);

        this.number = 1;

        this.state =
            {
                grade: Math.round(Math.random() * 40 + 60) + props.factor,
                txtNumber: 1,
            };
    }    

    btnClicked = () => {
        //alert(this.number);
        //this.number = 100;
        //alert(this.number);
        // this.setState({
        //     txtNumber:100
        // });        

        // this.setState({
        //     txtNumber:this.state.txtNumber*2
        // });

        this.setState((prevState) =>
            ({ txtNumber: prevState.txtNumber *2}));

    }

    txtChenged = (e) => {
        this.number = e.target.value * 2;
    }

    render() {
        debugger;
        return (
            <div className="container">
                <h2>StudentC</h2>
                <h3>hello my name is {this.props.name} </h3>
                <h4>my grade is: {this.state.grade}</h4>
                <button type="button"
                    onClick={this.btnClicked} className="btn btn-danger"
                >show number</button>
                <input type="text"
                    placeholder="insert your number"
                    onChange={this.txtChenged} />
                the number={this.state.txtNumber}<br/>
                this.number= {this.number}
            </div>
        );
    }
}

 // export default StudentC;