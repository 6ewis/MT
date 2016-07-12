import React, {Component} from 'react';
import {Panel, Col, Row} from 'react-bootstrap';
//Components
import Positions from './positions';
//Shared Components
import BasicInfo from '../shared/entityBasicInfo';

export default (props) => {
  console.log("im in index.js of duplicateTOBMErged", props);
  return (
      <div>
        <Row>
          <h4> Duplicate Corporate Persons To Be Merged </h4>
        </Row>
        <Panel>
          <Col md={12}>
             {/*<BasicInfo {...props}/> */}
             {/*duplicateToBeMerged.positions*/}
             <Positions {...props} />
          </Col>
        </Panel>
      </div>
  );
};
