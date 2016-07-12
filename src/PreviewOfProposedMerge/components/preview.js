import React, {Component} from 'react';
import {Panel, Col, Row} from 'react-bootstrap';
//Components
import NewCorporatePerson from './dumb/newCorporatePerson';
import Compliance from './dumb/compliance';
import DuplicateToBeMerged from './dumb/duplicateToBeMerged';
//Utility
import SerializeData from './utility/serializeData';
import R from 'ramda';

export default (props) => {
  console.log("Im in the preview index,", props);
  const serializedProps = SerializeData(R.merge(props.updatedFormContent, {selectedIds: props.selectedIds}));
  const {newCorporatePerson, compliance, duplicatePersonToBeMerged} =
    serializedProps;
  return (
      <div>
        <Row>
          <center><h2>Preview of Proposed Merge</h2></center>
        </Row>
        <NewCorporatePerson {...newCorporatePerson} />
        {/* <Compliance data={compliance} /> */}
        <hr/>
        <DuplicateToBeMerged {...duplicatePersonToBeMerged}/>
        {JSON.stringify(props)}
      </div>
  );
};
