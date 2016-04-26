import React, {Component } from 'react';
import {Row, Col} from 'react-bootstrap';
//Shared Components
import _SplitButtonWithLabel from './shared/_splitButtonWithLabel';
import _InputText from './shared/_inputText';
import _Label from './shared/_label';
import _Autosuggest from './smart/autosuggest';

//Not Shared
import Aliases from './aliases';
import Appellations from './appellations.js';
import Contacts from './contacts.js';
import DateInput from './dateInput';
import Countries from './countries.js';

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

      <Appellations labels={["Salutation", "Full Name", "Sort Name"]} />

      <Aliases data={aliases} fieldName="alias"/>
      <_Autosuggest label="Billing Client" data={billingClient}/>

      <Countries
        data={countries}
        items={[
          {label: "Nationality", defaultSelection: "CA"}, 
          {label: "Residence", defaultSelection: "CA"},
          {label: "Domicile", defaultSelection: "CA"}
        ]}
        />

      <Row>
        <_InputText label="Occupation" />
      </Row>

      <DateInput title="Birth Date"/>
      <DateInput title="Deceased Date"/>

      <Contacts labels={["Phone", "Email"]} />
      <Contacts labels={["Fax", "Other"]} />

  </form>
</Col>
 );
};
