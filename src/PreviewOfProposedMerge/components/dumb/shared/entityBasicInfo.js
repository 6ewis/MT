import React, {Component} from 'react';
import {Panel, Col, Row} from 'react-bootstrap';

export default ({data}) => {
  return (
    <div> 
      <Row className="">
        <Col md={2}><strong>Entity Type</strong></Col>
        <Col md={2}><strong>Conyers Employee</strong></Col>
      </Row>
      <Row className="">
        <Col md={2}>Individual</Col>
        <Col md={2}>Yes</Col>
      </Row>

      <Row className="">
        <Col md={2}><strong>Name</strong></Col>
        <Col md={2}><strong>Aliases</strong></Col>
      </Row>
      <Row className="">
        <Col md={2}>John Smith</Col>
        <Col md={2}>John E.Smith, Johnny Smith</Col>
      </Row>

      <Row className="">
        <Col md={2}><strong>Title</strong></Col>
      </Row>
      <Row className="">
        <Col md={2}>Mr.</Col>
      </Row>

      <Row className="">
        <Col md={2}><strong>Birth Date</strong></Col>
        <Col md={2}><strong>Deceased Date</strong></Col>
      </Row>
      <Row className="">
        <Col md={2}>01/06/1976</Col>
        <Col md={2}>01/06/1976</Col>
      </Row>

      <Row className="">
        <Col md={2}><strong>Birth Date</strong></Col>
        <Col md={2}><strong>Deceased Date</strong></Col>
      </Row>
      <Row className="">
        <Col md={2}>01/06/1976</Col>
        <Col md={2}>01/06/1976</Col>
      </Row>

      <Row className="">
        <Col md={2}><strong>Nationality</strong></Col>
        <Col md={2}><strong>Country of Residence</strong></Col>
        <Col md={2}><strong>Country of Domicile</strong></Col>
      </Row>
      <Row className="">
        <Col md={2}>Canada</Col>
        <Col md={2}>Canada</Col>
        <Col md={2}>Canada</Col>
      </Row>

      <Row className="">
        <Col md={2}><strong>Email</strong></Col>
        <Col md={2}><strong>Phone</strong></Col>
      </Row>
      <Row className="">
        <Col md={2}>test@conyersdill.com</Col>
        <Col md={2}>647-111-222</Col>
      </Row>

      <Row className="">
        <Col md={2}><strong>Telex</strong></Col>
        <Col md={2}><strong>Fax</strong></Col>
      </Row>
      <Row className="">
        <Col md={2}>1-888-999-111</Col>
        <Col md={2}>647-111-222</Col>
      </Row>
       
      <Panel header="Registered">
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
      </Panel>
    </div>
  );
};
