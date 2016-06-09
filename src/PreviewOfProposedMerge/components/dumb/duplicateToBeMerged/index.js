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
        <h2> Duplicate Corporate Persons To Be Merged </h2>
      </Row>
       
       <BasicInfo data={null}/>
       {/*duplicateToBeMerged.positions*/}
       <Positions data={null} />
    </div>
  );
};
