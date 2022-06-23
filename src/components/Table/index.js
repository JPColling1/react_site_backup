import React from 'react';
import { Markup } from 'interweave';
import Company_Requests from '../../company_requests';

export default class Table extends React.Component{
    render(){
        var table = "<table><tr><th>company_id</th><th>company_name</th></tr>";

        let requests = new Company_Requests();
        var tableData = requests.get_Companies();

        console.log("Get data here: " + requests.get_Companies())
        console.log("Returned Data is: " + tableData);

        
        for (let i = 0; i < tableData.length; i++) {
            table += "</tr>";
            table += "<td>[" + tableData[i]["company_id"] + "]</td>";
            table += "<td>[" + tableData[i]["company_name"] + "]</td>";
            table += "</tr>"
        }

        table += "</table";
        table = <Markup content={table}/>
        return table
    }
}