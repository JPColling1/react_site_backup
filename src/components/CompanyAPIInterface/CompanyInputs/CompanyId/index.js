import React from "react";

const CompanyID = ( { setIdNum } ) => {
    return <input onChange={(e) => {setIdNum(e.target.value)}} placeholder="company_id"></input>
}

export default CompanyID;