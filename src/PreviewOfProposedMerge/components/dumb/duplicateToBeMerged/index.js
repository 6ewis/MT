import React, {Component} from 'react';
import {Panel, Col, Row} from 'react-bootstrap';
//Components
import Positions from './positions';
//Shared Components
import BasicInfo from '../shared/entityBasicInfo';

export default (props) => {
  console.log("im in the indexDuplicate.js, this is just a test to see what the duplicate from backend is", props);
  return (
      <div>
        <Row>
          <h4> Duplicate Corporate Persons To Be Merged </h4>
        </Row>
        <Panel>
          <Col md={12}>
             {/*duplicateToBeMerged.positions*/}
             <Positions {...props} />
          </Col>
        </Panel>
      </div>
  );
};
