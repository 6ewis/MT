import React, {Component} from 'react';
import {Col, Panel, Row, Well} from 'react-bootstrap';
//Shared Components
import _SplitButtonWithLabel from './shared/_splitButtonWithLabel';
import NewField from './addNewField';

export default (props) => {

  const {header, defaultSelection} = props;

  return (
    <Panel {...props} header={header || `new Header`}>
      <Well>
            <Row>
              <Col mdOffset={11}>
                <i className="fa fa-trash-o fa-3x makeItRed"
                   aria-hidden="true"
                   style={{cursor: 'pointer'}}
                   >
                </i>
              </Col>
            </Row>

            <_SplitButtonWithLabel
             label="Address Type"
             defaultSelection= {defaultSelection}
             disabled= {true}
             />
            <_SplitButtonWithLabel
             label="Entity Specific"
             defaultSelection="~ None Selected ~"
             />

            <br/>
            <NewField />
      </Well>
    </Panel>
  );
};
