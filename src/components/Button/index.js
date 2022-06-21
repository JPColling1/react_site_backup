import React from 'react'
import Company_Requests from '../../company_requests'

export default class Button extends React.Component{
    // constructor(props){
    //     super(props);
    //     // this.state = {idNum: 0,
    //     //             company_name: 0}
    // }

    testFunction(){
        let requests = new Company_Requests();

        if (this.props.request === "gets"){
            requests.get_Companies();
        }
        else if (this.props.request === "get"){
            requests.get_Company(10);
        }
        else if (this.props.request === "post"){
            requests.post_Company();
        }
        else if (this.props.request === "patch"){
            requests.patch_Company();
        }
        else if (this.props.request === "put"){
            requests.put_Company();
        }
        else if (this.props.request === "delete"){
            requests.delete_Company();
        }
    }
    

    render(){
        return  <button onClick={this.testFunction.bind(this)} type="button">{this.props.name}</button> 
    }
}