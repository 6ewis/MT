import React from 'react';
import {Row} from 'react-bootstrap';
import _InputText from './shared/_inputText';

export default ({labels}) => {
  function renderInputs() {
    return labels.map((label, index) => {
      return (
       <Row key={index}>
         <_InputText label={label} />
       </Row>
      );
    });
  } 

  return (
    <div>
      {renderInputs()}
    </div>
         );
};
