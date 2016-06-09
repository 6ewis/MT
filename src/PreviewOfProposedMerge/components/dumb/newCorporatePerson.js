import React, {Component} from 'react';
import {Panel, Col, Row} from 'react-bootstrap';
//Shared Components
import BasicInfo from './shared/entityBasicInfo';

export default ({data}) => {
  return (
    <div> 
      <Row>
        <h2> New Corporate Person </h2>
      </Row>

      <BasicInfo />
      {/* The panel below should be added to BasicInfo when I'll work on the dynamic part */}
      <Panel header={"Mailing/Hoffmann-LA Roche Ltd.(M#006600)"}>
        <Row className="">
          <Col md={2}><strong>Preferred Name</strong></Col>
          <Col md={2}><strong>Position(s)</strong></Col>
        </Row>
        <Row className="">
          <Col md={2}>Johnny Smith</Col>
          <Col md={2}>Director</Col>
        </Row>

        <Row className="">
          <Col md={2}><strong>Preferred Name</strong></Col>
        </Row>

        <Col md={2} className="">
          <Row>
            Clarenden House
          </Row>
          <Row>
            2 church Street
          </Row>
          <Row>
            Hamilton
          </Row>
          <Row>
            Bermuda
          </Row>
        </Col>
    </Panel>
   </div>
  );
};
