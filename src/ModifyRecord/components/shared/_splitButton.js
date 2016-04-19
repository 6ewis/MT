import React from 'react';
import {Row, SplitButton, MenuItem} from 'react-bootstrap';

export default ({label, data}) => {
  const [defaultTitle, ...restOfData] = data;

  function renderMenuItems() {
   return restOfData.map((item, index) => {
     return ( <MenuItem eventKey={index}>{item}</MenuItem>);
   });
  }

  return (
    <Row>
      <label className="control-label">{label}</label>
        <div>
          <SplitButton bsStyle='default' title={defaultTitle} id='split-button-basic-1'>
           {renderMenuItems()}
          </SplitButton>
        </div>
       <br/>
    </Row>
  );
};
