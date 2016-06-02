import React, {Component} from 'react';
import {Col, Panel, Button, Row, Well} from 'react-bootstrap';
//Shared Components
import _SplitButtonWithLabel from './shared/_splitButtonWithLabel';
import _Label from './shared/_label';
import _InputText from '../smart/shared/_inputText';
import _ReactSelect from '../smart/shared/_ReactSelect';

export default (props) => {
  const {country_name, line_1, line_2, line_3, line_4, locality,
  postal_code, region, defaultSelection, header, matterPositions,
  updateFormData} = props;

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

             <_ReactSelect
              data={matterPositions}
              updateFormData={updateFormData}
              />
            <br/>

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

            <br/>
            <_SplitButtonWithLabel
               label="New Field"
               defaultSelection="None Selected"
             />

            <Row>
              <Button style={{paddingLeft: '0px'}}>
                Add New Field
              </Button>
            </Row>
      </Well>
    </Panel>
  );
};
