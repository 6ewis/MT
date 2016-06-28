import React from 'react';
import {Row, Col} from 'react-bootstrap';
import _InputText from '../smart/shared/_inputText';

export default ({items, updateFormData}) => {
  function renderInputs() {
    return items.map((item, index) => {
      return (
         <Col key={index} md={6} style={{paddingLeft: '0px'}}>
           <_InputText 
             updateFormData={updateFormData}
             label={item.label}
             value={item.defaultValue}/>
         </Col>
            );
    });
  }

  return (
    <Row>
      {renderInputs()}
      <br/>
    </Row>
         );
};
