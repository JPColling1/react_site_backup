import React from "react";
import APIButton from "./APIButton";

const CompanyAPIControls = ( { idNum, companyName, refresh } ) => {
    return <div>
        <APIButton idNum={idNum} companyName={companyName} method="get" buttonName="Retrieve Company in Console" refresh={refresh}/>
        <APIButton idNum={idNum} companyName={companyName} method="post" buttonName="Post Company" refresh={refresh}/>
        <APIButton idNum={idNum} companyName={companyName} method="patch" buttonName="Patch Company" refresh={refresh}/>
        <APIButton idNum={idNum} companyName={companyName} method="put" buttonName="Put Company" refresh={refresh}/>
        <APIButton idNum={idNum} companyName={companyName} method="delete" buttonName="Delete Company" refresh={refresh}/>
    </div>
}

export default CompanyAPIControls;