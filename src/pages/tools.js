import React from 'react';
import Button from '../components/Button/index';
//import Input from '../components/Input/index';
import {useState} from 'react';


const Tools = () => {
  
  //track company id and name
  const [idvalue, setidValue] = useState('');
  const handleidChange = event => {
    setidValue(event.target.value);
    //console.log(event.target.value);
  }
  const [namevalue, setnameValue] = useState('');
  const handlenameChange = event => {
    setnameValue(event.target.value);
    //console.log(event.target.value);
  }
  
  return (
    <div>
      <h1>Tools</h1>
      <input onChange={handleidChange}></input>
      <input onChange={handlenameChange}></input>
      {/* <Input id="company_id_input" name="companyId"></Input>
      <Input id="company_name_input" name="companyName"></Input> */}
      <Button name="Retrieve Company List" request="gets"></Button>
      <Button name="Retrieve Company" request="get"></Button>
      <Button name="Create Company" request="post"></Button>
      <Button name="Patch Company" request="patch"></Button>
      <Button name="Put Company" request="put"></Button>
      <Button name="Delete Company" request="delete"></Button>
    </div>
  );
};
  
export default Tools;