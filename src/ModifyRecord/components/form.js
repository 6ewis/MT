import React, {Component } from 'react';
import {Row, Col, Input, ButtonInput, SplitButton, MenuItem, Button} from 'react-bootstrap';
//Fields
import DateInput from './dateInput';
import _SplitButtonWithLabel from './shared/_splitButtonWithLabel';
import _InputText from './shared/_inputText';
import Aliases from './aliases';
import _Label from './shared/_label';
import _Autosuggest from './smart/autosuggest';

export default ({aliases, entityTypes, countries, billingClient}) => {
 return (
  <Col md={12}>
   <form>
      <_SplitButtonWithLabel 
        label="Type" 
        defaultSelection="Individual"
        data={entityTypes}
        fieldName="entityType"
        />
      <_InputText label="Salutation" />
      <_InputText label="Full Name" />
      <_InputText label="Sort Name" />
     
      <Aliases data={aliases}/>
      <_Autosuggest label="Billing Client" data={billingClient}/>

      <_SplitButtonWithLabel 
        label="Nationality" 
        defaultSelection="Canada"
        fieldName="country"
        data={countries} />
      <_SplitButtonWithLabel 
        label="Residence" 
        defaultSelection="USA"
        fieldName="country"
        data={countries} />
      <_SplitButtonWithLabel 
        label="Domicile" 
        defaultSelection="USA"
        fieldName="country"
        data={countries} />

      <_InputText label="Occupation" />

      <DateInput title="Birth Date"/>
      <DateInput title="Deceased Date"/>

  </form>
</Col>
 );
};
