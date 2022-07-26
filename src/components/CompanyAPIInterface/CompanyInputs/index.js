import React from "react";
import CompanyID from "./CompanyId";
import CompanyName from "./CompanyName";

const CompanyInputs = ( { setIdNum, setCompanyName} ) => {
    return <div>
        <CompanyID setIdNum={setIdNum}/>
        <CompanyName setCompanyName={setCompanyName}/>
    </div>
}

export default CompanyInputs;