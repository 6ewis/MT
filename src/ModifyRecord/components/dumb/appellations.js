import React from 'react';
import {Row} from 'react-bootstrap';
import _InputText from '../smart/shared/_inputText';

export default ({data}) => {
  function renderInputs() {
    return data.map((item, index) => {
      return (
       <Row key={index}>
         <_InputText label={item.label} value={item.defaultValue} />
         <br/>
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
