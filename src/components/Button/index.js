import React from 'react'
import Company_Requests from '../../company_requests'
//import Input from '../Input/index'

export default class Button extends React.Component{
    constructor(props){
        super(props);
        this.state = {idNum: 0,
                    company_name: 0}
    }

    // handleCallback(){

    // }

    testFunction(){
        let requests = new Company_Requests();

        if (this.props.request === "gets"){
            requests.get_Companies();
        }
        else if (this.props.request === "get"){
            requests.get_Company(this.state.idNum);
        }
        else if (this.props.request === "post"){
            requests.post_Company(this.state.company_name);
        }
        else if (this.props.request === "patch"){
            requests.patch_Company(this.state.idNum, this.state.company_name);
        }
        else if (this.props.request === "put"){
            requests.put_Company(this.state.idNum, this.state.company_name);
        }
        else if (this.props.request === "delete"){
            requests.delete_Company(this.state.idNum);
        }
    }
    

    render(){
        return  <button onClick={this.testFunction.bind(this)}
                         type="button">{this.props.name}</button> 
    }
}