import React from 'react';
import {Row, Col} from 'react-bootstrap';
import _InputText from './shared/_inputText';

export default ({labels}) => {
  function renderInputs() {
    return labels.map((label, index) => {
      return (
         <Col key={index} md={6} style={{paddingLeft: '0px'}}>
           <_InputText label={label} />
         </Col>
            );
    });
  }

  return (
    <Row>
      {renderInputs()}
    </Row>
         );
};
