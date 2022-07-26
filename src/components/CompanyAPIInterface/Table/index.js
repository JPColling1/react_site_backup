import React, { useEffect, useRef, useState } from 'react';

//Table component
const Table = ( { setRefresh } ) => {
    const [data, setData] = useState([]);
    const [table, setTable] = useState(null);
    // var table = useRef(null);
    // const setTable = (tableNew) => {
    //     table.current = tableNew;
    // }

    //Retrieve data from database
    const getData = () => {
        fetch("/getsCompanies").then(
            res => res.json()
        ).then(
            data => {
                //{debugger}
                var parsedData = JSON.parse(data["data"]);
                setData(parsedData);
            }
        );
    }

    //run functions on mount
    useEffect(() => {
        getData();
        setRefresh(() => getData); //send callback to refresh table data
    }, [setRefresh]);

    //construct table from a string based on data
    useEffect(() => {
        //{debugger}
        var tableString = "<table><tr><th>company_id</th><th>company_name</th></tr>";
        if (data){
            for (let i = 0; i < data.length; i++) {
                tableString += "</tr>";
                tableString += "<td>[" + data[i]["company_id"] + "]</td>";
                tableString += "<td>[" + data[i]["company_name"] + "]</td>";
                tableString += "</tr>"
                //console.log(responseData[i]["company_id"]);
            }
        }
        //{debugger}
        tableString = tableString + "</table>";
        setTable({__html: tableString});
    }, [data]);

    if (table){
        return <div dangerouslySetInnerHTML={table} />
    } else {
        return <div />
    }

}

export default Table;