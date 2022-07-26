//import { wait } from '@testing-library/user-event/dist/utils';
import React from 'react';
//import Button from '../components/Button/index';
import Table from '../components/Table/index';
//import Input from '../components/Input/index';
//import {useState} from 'react';
import './tools.css';

//var dataTable = new Table();

export default class Tools extends React.Component {
  constructor(props){
    super(props);
    this.state = {idNum: 0,
      company_name: 0}
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
    if (requestType === "gets"){
      fetch("/getsCompanies").then(
        res => res.json()
      ).then(
          data => {
              var parsedData = JSON.parse(data["data"])
              console.log(parsedData)
              this.dataTable.current.retrieve_data();
          }
      );
    }
    else if (requestType === "get"){
      fetch("/getCompany", 
        { method: 'POST', 
          body: JSON.stringify({"idNum": this.state.idNum}),
          headers: new Headers({ 
            'Content-Type': 'application/json',
          })
        }).then(
          res => res.json()
        ).then(
            data => {
                var parsedData = JSON.parse(data["data"])
                console.log(parsedData)
                this.dataTable.current.retrieve_data();
            }
        );
    }
    else if (requestType === "post"){
      fetch("/postCompany", {
          method:"POST", 
          body: JSON.stringify({"company_name": String(this.state.company_name)}),
          headers: new Headers({ 
            "Content-Type": "application/json",
          })
        }).then(
          res => res.json()
        ).then(
            data => {
                console.log(data["data"])
                this.dataTable.current.retrieve_data();
            }
        );
    }
    else if (requestType === "patch"){
      fetch("/patchCompany", 
        { method: 'POST', 
          body: JSON.stringify({"idNum": this.state.idNum, "company_name": this.state.company_name}),
          headers: new Headers({ 
            'Content-Type': 'application/json',
          })
        }).then(
          res => res.json()
        ).then(
            data => {
                console.log(data["data"])
                this.dataTable.current.retrieve_data();
            }
        );
    }
    else if (requestType === "put"){
      fetch("/putCompany", 
        { method: 'POST', 
          body: JSON.stringify({"idNum": this.state.idNum, "company_name": this.state.company_name}),
          headers: new Headers({ 
            'Content-Type': 'application/json',
          })
        }).then(
          res => res.json()
        ).then(
            data => {
                console.log(data["data"])
                this.dataTable.current.retrieve_data();
            }
        );
    }
    else if (requestType === "delete"){
      fetch("/deleteCompany", 
        { method: 'POST', 
          body: JSON.stringify({"idNum": this.state.idNum}),
          headers: new Headers({ 
            'Content-Type': 'application/json',
          })
        }).then(
          res => res.json()
        ).then(
            data => {
                console.log(data["data"])
                this.dataTable.current.retrieve_data();
            }
        );
    }
  }

  render(){
    return <div>
        <h1>Tools</h1>
        <div class="row">
          <div class="column">
            <input onChange={this.handleidChange.bind(this)} placeholder="company_id"></input>
            <input onChange={this.handlenameChange.bind(this)} placeholder="company_name"></input>
          </div>
          <div class="column">
            <button onClick={this.makeRequests.bind(this, "gets")}type="button">Retrieve Companies in Console</button> 
            <button onClick={this.makeRequests.bind(this, "get")}type="button">Retrieve Company in Console</button> 
            <button onClick={this.makeRequests.bind(this, "post")}type="button">Post Company</button> 
            <button onClick={this.makeRequests.bind(this, "patch")}type="button">Patch Company</button> 
            <button onClick={this.makeRequests.bind(this, "put")}type="button">Put Company</button>
            <button onClick={this.makeRequests.bind(this, "delete")}type="button">Delete Company</button> 
          </div>
          <div class="column">
            <Table ref={this.dataTable}></Table>
          </div>
        </div>
      </div>
  }
}