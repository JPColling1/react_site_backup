import React, { useState } from 'react';
import CompanyInputs from './CompanyInputs';
import CompanyAPIControls from './CompanyAPIControls';
import Table from './Table';
import './index.css';

//Company API Interface component
const CompanyAPIInterface = () => {
  //state vars
  const [idNum, setIdNum] = useState(0);
  const [companyName, setCompanyName] = useState("");
  const [refresh, setRefresh] = useState(null);

  return <div>
        <div class="row">
          <div class="column">
            <CompanyInputs setIdNum={setIdNum} setCompanyName={setCompanyName}/>
          </div>
          <div class="column">
            <CompanyAPIControls idNum={idNum} companyName={companyName} refresh={refresh}/>
          </div>
          <div class="column">
            <Table setRefresh={setRefresh}/>
          </div>
        </div>
      </div>
}

export default CompanyAPIInterface;