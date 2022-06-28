//import { wait } from '@testing-library/user-event/dist/utils';
import React from 'react';
//import Button from '../components/Button/index';
import Table from '../components/Table/index'
//import Input from '../components/Input/index';
//import {useState} from 'react';
import Company_Requests from '../company_requests'

//var dataTable = new Table();

export default class Tools extends React.Component {
  constructor(props){
    super(props);
    this.state = {idNum: 0,
      company_name: 0}
    this.button1 = React.createRef();
    this.button2 = React.createRef();
    this.button3 = React.createRef();
    this.button4 = React.createRef();
    this.button5 = React.createRef();
    this.dataTable = React.createRef();
  }

  //track company id and name
  handleidChange = event => {
    this.setState({idNum: event.target.value});
  }
  handlenameChange = event => {
    this.setState({company_name: event.target.value});
  }

  //make requests
  makeRequests(requestType){
    let requests = new Company_Requests();

    if (requestType === "gets"){
      requests.get_Companies();
    }
    else if (requestType === "get"){
      requests.get_Company(this.state.idNum);
    }
    else if (requestType === "post"){
      requests.post_Company(this.state.company_name);
    }
    else if (requestType === "patch"){
      requests.patch_Company(this.state.idNum, this.state.company_name);
    }
    else if (requestType === "put"){
      requests.put_Company(this.state.idNum, this.state.company_name);
    }
    else if (requestType === "delete"){
      requests.delete_Company(this.state.idNum);
    }

    this.dataTable.current.retrieve_data();
  }

  render(){
    return <div>
        <h1>Tools</h1>
        <input onChange={this.handleidChange.bind(this)}></input>
        <input onChange={this.handlenameChange.bind(this)}></input>
        <button onClick={this.makeRequests.bind(this, "gets")}type="button">Retrieve Companies</button> 
        <button onClick={this.makeRequests.bind(this, "get")}type="button">Retrieve Company</button> 
        <button onClick={this.makeRequests.bind(this, "post")}type="button">Post Company</button> 
        <button onClick={this.makeRequests.bind(this, "patch")}type="button">Patch Company</button> 
        <button onClick={this.makeRequests.bind(this, "put")}type="button">Put Company</button>
        <button onClick={this.makeRequests.bind(this, "delete")}type="button">Delete Company</button> 

        <Table ref={this.dataTable}></Table>
      </div>
  }
}