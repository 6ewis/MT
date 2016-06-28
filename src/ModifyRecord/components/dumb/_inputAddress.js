import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import R from 'ramda';
//Shared Components
import _InputText from '../smart/shared/_inputText';

export default ({updateAddressData, item}) => {
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

  const renderInput = () => {
      return (
        <Row>
          <Col md={10} style={{paddingLeft: '0px'}}>
            <_InputText
              updateFormData={updateAdditionalAddressDataCurried(item)}
              value={item}
            />
          </Col>
      </Row>);
  };

  return (
    renderInput()
  );
};
