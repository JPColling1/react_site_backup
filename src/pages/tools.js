import React from 'react';
import Button from '../components/Button/index';

const Tools = () => {
  return (
    <div>
      <h1>Tools</h1>
      <Button name="Retrieve Company List" request="get"></Button>
    </div>
  );
};
  
export default Tools;