import React from 'react'
//import testAPI from '../../company_requests'


function testFunction(){
    //let requests = new CompanyRequests();
    //requests.testTheAPI();
}

export default class Button extends React.Component{
    
    render(){
        return  <button onClick={testFunction} type="button">Click Me!</button> 
    }
}