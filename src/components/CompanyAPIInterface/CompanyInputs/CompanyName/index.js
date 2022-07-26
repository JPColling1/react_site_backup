import React from "react";

const CompanyName = ( { setCompanyName } ) => {
    return <input onChange={(e) => {setCompanyName(e.target.value)}} placeholder="company_name"></input>
}

export default CompanyName;