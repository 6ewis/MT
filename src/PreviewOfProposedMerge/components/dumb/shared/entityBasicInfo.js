import React, {Component} from 'react';
import {Table, Panel, Col, Row} from 'react-bootstrap';

export default ({data}) => {
  return (
    <div>
     <Table hover>
       <tbody>
          <tr>
            <td><strong>Entity Type</strong></td>
            <td><strong>Conyers Employee</strong></td>
          </tr>
          <tr>
            <td>Individual</td>
            <td>Yes</td>
          </tr>

          <tr>
            <td><strong>Name</strong></td>
            <td><strong>Aliases</strong></td>
          </tr>
          <tr>
            <td>John Smith</td>
            <td>John E.Smith, Johnny Smith</td>
          </tr>

          <tr>
            <td><strong>Title</strong></td>
          </tr>
          <tr>
            <td>Mr.</td>
          </tr>

          <tr>
            <td><strong>Birth Date</strong></td>
            <td><strong>Deceased Date</strong></td>
          </tr>
          <tr>
            <td>01/06/1976</td>
            <td>01/06/1976</td>
          </tr>

          <tr>
            <td><strong>Nationality</strong></td>
            <td><strong>Country of Residence</strong></td>
            <td><strong>Country of Domicile</strong></td>
          </tr>
          <tr>
            <td>Canada</td>
            <td>Spain</td>
            <td>Spain</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td><strong>Phone</strong></td>
          </tr>
          <tr>
            <td>test@conyersdill.com</td>
            <td>647-111-444</td>
          </tr>

          <tr>
            <td><strong>Telex</strong></td>
            <td><strong>Fax</strong></td>
          </tr>
          <tr>
            <td>1-888-999-111</td>
            <td>647-111-444</td>
          </tr>
        </tbody>
      </Table>

      <Panel header="Registered">
        <Col md={12}>
            <Row>
              <Col md={2} Clarenden House></Col>
            </Row>
            <Row>
              <Col md={2}> 2 church Street</Col>
            </Row>
            <Row>
              <Col md={2}>Hamilton</Col>
            </Row>
            <Row>
              <Col md={2}>Bermuda</Col>
            </Row>
        </Col>
      </Panel>
    </div>
  );
};
