import React, {Component} from 'react';
import {Panel, Col, Row} from 'react-bootstrap';
//Components
import Positions from './positions';
//Shared Components
import BasicInfo from '../shared/entityBasicInfo';

export default ({data}) => {
  return (
      <div>
        <Row>
          <h4> Duplicate Corporate Persons To Be Merged </h4>
        </Row>
        <Panel>
          <Col md={12}>
             <BasicInfo data={null}/>
             {/*duplicateToBeMerged.positions*/}
             <Positions data={null} />
          </Col>
        </Panel>
      </div>
  );
};
