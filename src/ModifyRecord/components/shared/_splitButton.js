import React from 'react';
import {Row, SplitButton, MenuItem} from 'react-bootstrap';

export default ({data, fieldName, defaultSelection}) => {

  //const [defaultTitle, ...restOfData] = data;
  //we might not need it anymore since defaultTitle is coming from second page
  
  function renderMenuItems() {
   return data.map((item) => {
    return ( <MenuItem key={item.id + fieldName} eventKey={item.id}>{item[fieldName]}</MenuItem>);
   });
  }

  return (
    <SplitButton bsStyle='default' title={defaultSelection || data[0][fieldName]} id='split-button-basic-{fieldName}'>
     {renderMenuItems()}
    </SplitButton>
  );
};
