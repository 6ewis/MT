import React from 'react';
import {Row, Input} from 'react-bootstrap';

export default ({label}) => {
  return (
         <Row>
           <Input type="text" label={label}/>
         </Row>
  );
};
