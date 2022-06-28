import React from 'react';
import { Markup } from 'interweave';
import Company_Requests from '../../company_requests';

var responseData;

function set_global_data(newData){
    responseData = newData;
    console.log(responseData);
}

export default class Table extends React.Component{
    constructor(props){
        super(props);
        this.state={tableData: ""}
    }
    
    set_data(input){
        set_global_data(input);
        console.log(responseData);
        this.setState({tableData: responseData});
    }


    retrieve_data(){
        let requests = new Company_Requests();
        requests.get_Companies().then(value => this.set_data(value));
    }

    componentDidMount(){
        this.retrieve_data();
    }

    render(){
        console.log("generating table");
        var table = "<table><tr><th>company_id</th><th>company_name</th></tr>";
        if (responseData){
            for (let i = 0; i < responseData.length; i++) {
                    table += "</tr>";
                    table += "<td>[" + responseData[i]["company_id"] + "]</td>";
                    table += "<td>[" + responseData[i]["company_name"] + "]</td>";
                    table += "</tr>"
                    //console.log(responseData[i]["company_id"]);
                }
        }
        table += "</table";
        table = <Markup content={table}/>;
        return table;
    }
}