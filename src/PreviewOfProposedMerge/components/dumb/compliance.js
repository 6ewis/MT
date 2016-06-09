import React, {Component} from 'react';
import {Panel, Col, Row} from 'react-bootstrap';

export default ({data}) => {
  return (
    <div>
      <Row>
        <h2> Compliance </h2>
      </Row>
      <Row className="">
        <Col md={2}><strong>UBO NAME</strong></Col>
        <Col md={2}><strong>Percent</strong></Col>
      </Row>
      <Row className="">
        <Col md={2}>Johnny Smith</Col>
        <Col md={2}>100%</Col>
      </Row>
      <Row className="">
        <Col mdOffset={2}>Total</Col>
        <Col md={2}>100%</Col>
      </Row>
    </div>
  );
};
