import React from 'react';
import Button from '../components/Button/index';
//import CompanyRequests from '../company_db_api/company_requests';
  
//let requests = new CompanyRequests();
function testFunction(){
  console.log("activated");
}

const Tools = () => {
  return (
    <div>
      <h1>Tools</h1>
      <Button onClick={testFunction}></Button>
    </div>
  );
};
  
export default Tools;