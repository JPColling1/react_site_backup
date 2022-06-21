import React from 'react'
import Company_Requests from '../../company_requests'


function testFunction(){
    let requests = new Company_Requests();
    requests.get_Companies();
}

export default class Button extends React.Component{
    
    render(){
        return  <button onClick={testFunction} type="button">Click Me!</button> 
    }
}