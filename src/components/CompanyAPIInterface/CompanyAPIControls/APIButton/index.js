import React from "react";

const makeRequest = (idNum, companyName, method, refresh) => {
    var endpoint = "/" + method + "Company"
    fetch(endpoint, 
        { method: 'POST', 
          body: JSON.stringify({"idNum": idNum, "company_name": companyName}),
          headers: new Headers({ 
            'Content-Type': 'application/json',
          })
        }).then(
          res => res.json()
        ).then(
            data => {
                //{debugger}
                console.log(data["data"]);
                refresh();
            }
        );
}

const APIButton = ( { idNum, companyName, method, buttonName, refresh } ) => {
    return <button onClick={() => makeRequest(idNum, companyName, method, refresh)} type="button">{buttonName}</button> 
}

export default APIButton;