import React from 'react';
import Button from '../components/Button/index';
//import Input from '../components/Input/index';
//import {useState} from 'react';


export default class Tools extends React.Component {
  constructor(props){
    super(props);
    this.button1 = React.createRef();
    this.button2 = React.createRef();
    this.button3 = React.createRef();
    this.button4 = React.createRef();
    this.button5 = React.createRef();
    // this.state = {idvalue:"",
    //             namevalue:""}
  }

  //track company id and name
  handleidChange = event => {
    this.button1.current.set_idNum(event.target.value);
    this.button3.current.set_idNum(event.target.value);
    this.button4.current.set_idNum(event.target.value);
    this.button5.current.set_idNum(event.target.value);
  }
  handlenameChange = event => {
    this.button2.current.set_company_name(event.target.value);
    this.button3.current.set_company_name(event.target.value);
    this.button4.current.set_company_name(event.target.value);
  }

  render(){
    return <div>
        <h1>Tools</h1>
        <input onChange={this.handleidChange.bind(this)}></input>
        <input onChange={this.handlenameChange.bind(this)}></input>
        <Button name="Retrieve Company List" request="gets"></Button>
        <Button name="Retrieve Company" request="get" ref={this.button1}></Button>
        <Button name="Create Company" request="post" ref={this.button2}></Button>
        <Button name="Patch Company" request="patch" ref={this.button3}></Button>
        <Button name="Put Company" request="put" ref={this.button4}></Button>
        <Button name="Delete Company" request="delete" ref={this.button5}></Button>
      </div>
  }
}