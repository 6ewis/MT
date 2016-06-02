import React, {Component} from 'react';
import {Col, Panel, Button, Row, Well} from 'react-bootstrap';
//Shared Components
import _SplitButtonWithLabel from './shared/_splitButtonWithLabel';
import _Label from './shared/_label';
import _InputText from '../smart/shared/_inputText';
import _ReactSelect from '../smart/shared/_reactSelect';

export default (props) => {
  const {country_name, line_1, line_2, line_3, line_4, locality,
  postal_code, region, defaultSelection, header, matterPositions,
  updateFormData} = props;

//need to push changes here to update store
//updatFormData({`header`: {'AddressType': childrenUpdates.addressType }});
  const renderReactSelect = () => {
    return (header === 'Mailing') ?
      (
        <_ReactSelect
          data= {matterPositions}
          updateFormData= {updateFormData}
        />
      ) :
      null;
  };

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

            {renderReactSelect()}
            <br/>

            <Row>
              <_Label name="Address"/>
            </Row>

            <Row>
              <Col md={10} style={{paddingLeft: '0px'}}>
                <_InputText
                  updateFormData={updateFormData}
                  value={line_1}/>
              </Col>
              <Col md={2} style={{paddingLeft: '0px'}}>
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </Col>
            </Row>

            <Row>
              <Col md={10} style={{paddingLeft: '0px'}}>
                <_InputText
                  updateFormData={updateFormData}
                  value={line_2}
                />
              </Col>
            </Row>

            <Row>
              <Col md={10} style={{paddingLeft: '0px'}}>
                <_InputText
                  updateFormData={updateFormData}
                  value={line_3}
                />
              </Col>
            </Row>

            <Row>
              <Col md={10} style={{paddingLeft: '0px'}}>
                <_InputText
                  updateFormData={updateFormData}
                  value={line_4}
                />
              </Col>
            </Row>
            <br/>

            <Row>
              <Col md={10} style={{paddingLeft: '0px'}}>
                <_InputText
                   label="City"
                   updateFormData={updateFormData}
                   value={locality}
                />
              </Col>
            </Row>

            <br/>
            <Row>
              <Col md={10} style={{paddingLeft: '0px'}}>
                <_InputText
                   label="Province/State"
                   updateFormData={updateFormData}
                   value={postal_code}
                />
              </Col>
            </Row>

            <br/>
            <Row>
              <Col md={10} style={{paddingLeft: '0px'}}>
                <_InputText
                   label="Country"
                   updateFormData={updateFormData}
                   value={country_name}
                />
              </Col>
            </Row>

            <br/>
        </Well>
    </Panel>
  );
};
