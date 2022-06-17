import React from 'react';
import Button from '../components/Button/index';
import CompanyRequests from '../company_db_api/company_requests';
  
let requests = new CompanyRequests();

const Tools = () => {
  return (
    <div>
      <h1>Tools</h1>
      <Button onClick={requests.testTheAPI}>Run Test</Button>
    </div>
  );
};
  
export default Tools;