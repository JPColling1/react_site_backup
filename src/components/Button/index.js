import React from 'react'
//import CompanyRequests from '../company_db_api/company_requests';
  
//let requests = new CompanyRequests();

function testFunction(){
    console.log("activated");
}

export default class Button extends React.Component{
    
    render(){
        return  <button onClick={testFunction} type="button">Click Me!</button> 
    }
}