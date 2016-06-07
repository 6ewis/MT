
import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
//Shared Components
import _Label from './shared/_label';
import _InputText from '../smart/shared/_inputText';
import R from 'ramda';

export default ({header, country_name, line_1, line_2, line_3, line_4, locality,
  postal_code, region, updateAddressData}) => {

  const updateAdditionalAddressDataCurried =
    R.curry((curriedProperty, updatedValue) => {
    //if it's a registered address it will update the addressData of
    //the parent element with {registeredAddress: {city: foo, country: foo...}}
      updateAddressData(
      {
        //{city: foo}
        [curriedProperty]: updatedValue
      });
  });

  //some components have a label field sets, we can use it by default
  const updateAdditionalAddressData = (updatedObject) =>
    updateAddressData(updatedObject);

  return (
    <div>
      <Row>
        <_Label name="Address"/>
      </Row>
      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText
            updateFormData={updateAdditionalAddressDataCurried('line_1')}
            value={line_1}/>
        </Col>
        <Col md={2} style={{paddingLeft: '0px'}}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </Col>
      </Row>

      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText
            updateFormData={updateAdditionalAddressDataCurried('line_2')}
            value={line_2}
          />
        </Col>
      </Row>

      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText
            updateFormData={updateAdditionalAddressDataCurried('line_3')}
            value={line_3}
          />
        </Col>
      </Row>
      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText
            updateFormData={updateAdditionalAddressDataCurried('line_4')}
            value={line_4}
          />
        </Col>
      </Row>

      <br/>
      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText
            updateFormData={updateAdditionalAddressData}
            label="City"
            value={locality}
          />
        </Col>
      </Row>

      <br/>
      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText
            label="Province/State"
            updateFormData={updateAdditionalAddressData}
            value={postal_code}
          />
        </Col>
      </Row>

      <br/>
      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText
            label="Country"
            updateFormData={updateAdditionalAddressData}
            value={country_name}
          />
        </Col>
      </Row>
      <br/>
    </div>
  );
};
