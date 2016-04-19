import React from 'react';
import {Row} from 'react-bootstrap';

export default ({name}) => {
  return (
         <Row>
           <label className="control-label">{name}</label> 
         </Row>
  );
};
