import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
//Shared Components
import _SplitButtonWithLabel from './shared/_splitButtonWithLabel';
import _Label from './shared/_label';
import _InputText from '../smart/shared/_inputText';
import R from 'ramda';

export default ({countries, header, updateAddressData}) => {

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
           />
        </Col>
        <Col md={2} style={{paddingLeft: '0px'}}>
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </Col>
      </Row>

      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText
            updateFormData={updateAdditionalAddressDataCurried('line_2')}
          />
        </Col>
      </Row>

      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText
            updateFormData={updateAdditionalAddressDataCurried('line_3')}
          />
        </Col>
      </Row>
      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText
            updateFormData={updateAdditionalAddressDataCurried('line_4')}
          />
        </Col>
      </Row>

      <br/>
      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText
            updateFormData={updateAdditionalAddressData}
            label="City"
          />
        </Col>
      </Row>

      <br/>
      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText
            label="Province/State"
            updateFormData={updateAdditionalAddressData}
          />
        </Col>
      </Row>

      <br/>
      <_SplitButtonWithLabel
        updateFormData= {updateAdditionalAddressData}
        label="Country"
        options={countries.map(item => item.country_name)} />
      <br/>
    </div>
  );
};
