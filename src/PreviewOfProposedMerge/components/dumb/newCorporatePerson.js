import React, {Component} from 'react';
import {Panel, Col, Row} from 'react-bootstrap';
//Shared Components
import BasicInfo from './shared/entityBasicInfo';

export default (props) => {
  console.log("the props are", props);
  return (
    <div>
      <Row>
        <Col md={12}>
          <h4> New Corporate Person </h4>
        </Col>
      </Row>

      <BasicInfo {...props}/>
   </div>
  );
};
