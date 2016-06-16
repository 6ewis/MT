import React, {Component} from 'react';
import {Col, Row} from 'react-bootstrap';
import R from 'ramda';
//Shared Components
import _SplitButtonWithLabel from './shared/_splitButtonWithLabel';
import _Label from './shared/_label';
import _InputText from '../smart/shared/_inputText';
import _inputAddress from './_inputAddress';

export default ({countries, header, updateAddressData, removeField}) => {

  //some components have a label field sets, we can use it by default
  const updateAdditionalAddressData = (updatedObject) =>
    updateAddressData(updatedObject);

  const renderInputAddresses = () =>
      R.map(item =>
        <_inputAddress
          updateAddressData={updateAddressData}
          item={item}
          key={item} />,
         ['line_1', 'line_2', 'line_3', 'line_4']);


  return (
    <div>
      <Row>
         <Col md={10} style={{paddingLeft: '0px'}}>
           <_Label name="Address"/>
         </Col>
         <Col md={2} style={{paddingLeft: '0px'}}>
            <i onClick={removeField.bind(undefined, 'Address')}
               style={{cursor: 'pointer'}}
               className="fa fa-trash-o fa-2x makeItRed"
               aria-hidden="true"></i>
         </Col>
      </Row>

      {renderInputAddresses()}
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

      <Row>
        <Col md={10} style={{paddingLeft: '0px'}}>
          <_InputText
            label="Postal/Zip Code"
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
