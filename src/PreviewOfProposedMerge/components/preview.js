import React, {Component} from 'react';
import {Panel, Col, Row} from 'react-bootstrap';
//Components
import NewCorporatePerson from './dumb/newCorporatePerson';
import Compliance from './dumb/compliance';
import DuplicateToBeMerged from './dumb/duplicateToBeMerged';

export default ({updatedFormContent}) => {
  //don't forget to serialize it
  const {newCorporatePerson, compliance, duplicateToBeMerged} =
    updatedFormContent;
  return (
      <div>
        <Row>
          <center><h2>Preview of Proposed Merge</h2></center>
        </Row>
        <NewCorporatePerson data={newCorporatePerson} />
        <Compliance data={compliance} />
        <hr/>
        <DuplicateToBeMerged data={duplicateToBeMerged} />
        {JSON.stringify(updatedFormContent)}
      </div>
  );
};
