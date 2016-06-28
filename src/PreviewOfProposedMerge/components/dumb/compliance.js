import React, {Component} from 'react';
import {Table, Panel, Col, Row} from 'react-bootstrap';

export default ({data}) => {
  return (
    <div>
      <Col md={12}>
        <Row>
          <h4> Compliance </h4>
        </Row>
      </Col>
      <Table hover>
        <thead>
          <tr>
            <th width="10%">UBO NAME</th>
            <th width="10%"></th>
            <th>PERCENT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Smith</td>
            <td></td>
            <td>100%</td>
          </tr>
          <tr>
            <td></td>
            <td>Total</td>
            <td>100%</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
