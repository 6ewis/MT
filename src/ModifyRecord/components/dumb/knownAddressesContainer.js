import React, {Component} from 'react';
import {Col, Panel, Button, Row, Well} from 'react-bootstrap';
//Shared Components
import _SplitButtonWithLabel from './shared/_splitButtonWithLabel';
import _Label from './shared/_label';
import _InputText from '../smart/shared/_inputText';
import _ReactSelect from '../smart/shared/_reactSelect';
import R from 'ramda';

export default (props) => {
  const {country_name, line_1, line_2, line_3, line_4, locality,
  postal_code, region, defaultSelection, header, matterPositions,
  updateAddressData} = props;

  const updateKnownAddressDataCurried = R.curry((curriedProperty, updatedValue) => {
    //if it's a registered address it will update the addressData of
    //the parent element with {registeredAddress: {city: foo, country: foo...}}
    updateAddressData(
      {
        [`${header}Address`]: { [curriedProperty]: updatedValue }
    });
  });

  const updateKnownAddressData = (updatedObject) =>
    updateAddressData({[`${header}Address`]: updatedObject});

  const renderReactSelect = () => {
    return (header === 'Mailing') ?
      (
        <_ReactSelect
          data= {matterPositions}
          updateAddressData= {updateAddressData}
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

            {/* have to remember to save it to the store by default*/}
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
                  updateFormData={updateKnownAddressDataCurried('line_1')}
                  value={line_1}/>
              </Col>
              <Col md={2} style={{paddingLeft: '0px'}}>
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </Col>
            </Row>

            <Row>
              <Col md={10} style={{paddingLeft: '0px'}}>
                <_InputText
                  updateFormData={updateKnownAddressDataCurried('line_2')}
                  value={line_2}
                />
              </Col>
            </Row>

            <Row>
              <Col md={10} style={{paddingLeft: '0px'}}>
                <_InputText
                  updateFormData={updateKnownAddressDataCurried('line_3')}
                  value={line_3}
                />
              </Col>
            </Row>

            <Row>
              <Col md={10} style={{paddingLeft: '0px'}}>
                <_InputText
                  updateFormData={updateKnownAddressDataCurried('line_4')}
                  value={line_4}
                />
              </Col>
            </Row>
            <br/>

            <Row>
              <Col md={10} style={{paddingLeft: '0px'}}>
                <_InputText
                   label="City"
                   updateFormData={updateKnownAddressData}
                   value={locality}
                />
              </Col>
            </Row>

            <br/>
            <Row>
              <Col md={10} style={{paddingLeft: '0px'}}>
                <_InputText
                   label="Province/State"
                   updateFormData={updateKnownAddressData}
                   value={postal_code}
                />
              </Col>
            </Row>

            <br/>
            <Row>
              <Col md={10} style={{paddingLeft: '0px'}}>
                <_InputText
                   label="Country"
                   updateFormData={updateKnownAddressData}
                   value={country_name}
                />
              </Col>
            </Row>

            <br/>
        </Well>
    </Panel>
  );
};
