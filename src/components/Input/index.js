import React from "react";

export default class Input extends React.Component{
    constructor(props){
        super(props);
        this.getValue = this.getValue.bind(this);
        this.state = {value: ""}
    }

    getValue(){
        return this.state.value
    }

    setValue(){
        
    }

    render(){
        return <input type="text" id={this.props.id} name={this.props.name} value={this.state.value}></input>
    }
}