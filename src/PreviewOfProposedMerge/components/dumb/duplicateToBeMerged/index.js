import React, {Component} from 'react';
import {Panel, Col, Row} from 'react-bootstrap';
//Components
import BasicInfo from './BasicInfo';
import R from 'ramda';

export default (props) => {
  return (
      <div>
        <Row>
          <h4> Duplicate Corporate Persons To Be Merged </h4>
        </Row>
        {R.addIndex(R.map)((item, index) => {
          return (<Panel key={index}>
            <Col md={12}>
                <BasicInfo {...item} />
            </Col>
          </Panel>); }
        , R.values(props))}
      </div>
  );
};
