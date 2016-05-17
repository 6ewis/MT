
import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
//Shared Components
import _Label from './shared/_label';
import _InputText from '../smart/shared/_inputText';

export default ({country_name, line_1, line_2, line_3, line_4, locality,
  postal_code, region}) => {

  return (
    <div>
      <Row>
        <_Label name="Address"/>
      </Row>
      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText
            value={line_1}/>
        </Col>
        <Col md={2} style={{paddingLeft: '0px'}}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </Col>
      </Row>
      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText
            value={line_2}
          />
        </Col>
      </Row>

      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText
            value={line_3}
          />
        </Col>
      </Row>
      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText
            value={line_4}
          />
        </Col>
      </Row>

      <br/>
      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText label="City"
             value={locality}
          />
        </Col>
      </Row>

      <br/>
      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText label="Province/State"
             value={postal_code}
          />
        </Col>
      </Row>

      <br/>
      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText label="Country"
             value={country_name}
          />
        </Col>
      </Row>
    </div>
  );
};
