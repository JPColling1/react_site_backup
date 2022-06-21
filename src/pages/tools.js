import React from 'react';
import Button from '../components/Button/index';
//import Input from '../components/Input/index';
//import {useState} from 'react';


export default class Tools extends React.Component {
  constructor(props){
    super(props);
    this.state = {idvalue:"",
                namevalue:""}
  }

  //track company id and name
  handleidChange = event => {
    this.setState({idvalue: event.target.value})
    console.log(this.state.idvalue);
  }
  handlenameChange = event => {
    this.setState({namevalue: event.target.value})
    console.log(this.state.namevalue);
  }

  render(){
    return <div>
        <h1>Tools</h1>
        <input onChange={this.handleidChange.bind(this)}></input>
        <input onChange={this.handlenameChange.bind(this)}></input>
        <Button name="Retrieve Company List" request="gets"></Button>
        <Button name="Retrieve Company" request="get"></Button>
        <Button name="Create Company" request="post"></Button>
        <Button name="Patch Company" request="patch"></Button>
        <Button name="Put Company" request="put"></Button>
        <Button name="Delete Company" request="delete"></Button>
      </div>
  }
}