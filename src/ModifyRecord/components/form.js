import React, {Component} from 'react';
import {Row, Col} from 'react-bootstrap';
//Shared Components
import _SplitButtonWithLabel from './dumb/shared/_splitButtonWithLabel';
import _InputText from './smart/shared/_inputText';
import _Label from './dumb/shared/_label';
import _Autosuggest from './smart/autosuggest';
//Not Shared
import Aliases from './smart/aliases';
import Appellations from './dumb/appellations.js';
import Contacts from './dumb/contacts.js';
import DateInput from './dumb/dateInput';
import Countries from './dumb/countries.js';
import _Spinner from '../../shared/_Spinner.js';
import AddressRoot from './smart/addressRoot.js';
//Utility libs
import R from 'ramda';
//Transition Buttons
import {BackButton, NextButton, CancelButton} from '../../shared/transitionButtons/index.js';

export default (
  {updateFormData, aliases, entity_type, countries, billing_clients,
   salutation, name, sort_name, birth_date, deceased_date,
   phone, email, fax, nationality, residence, domicile, telex,
   mailingAddressFields, registeredAddressFields, dividendAddressFields,
   matter_positions, matter_specific_addresses, loading, store
  }) => {

   const renderTransitionsButtons =
     <Col md={12}>
       <Col md={2}>
       </Col>
       <Col md={3} style={{paddingLeft: '0px', paddingRight: '0px'}}>
         <BackButton url="/SelectRecordsToMerge"/>
       </Col>
       <Col md={3}>
         <NextButton url="/PreviewOfProposedMerge" state={{store: store}} />
       </Col>
       <Col md={3}>
         <CancelButton />
       </Col>
     </Col>
   ;

  const matterPositions = matter_positions;
  const matterSpecificAddresses = matter_specific_addresses;

  const addressData =
    {mailingAddressFields,
     registeredAddressFields,
     dividendAddressFields,
     matterPositions,
     matterSpecificAddresses,
     updateFormData,
     countries};
   // check that the requests made to the server is done in React.js
   //  use a middleware
   return loading ?
     <_Spinner/> :
     (
     <Col md={12}>
      <form>
         <_SplitButtonWithLabel
           label="Type"
           defaultSelection="Individual"
           options={["Individual", "Company", "Trust", "PartnerShip"]}
           updateFormData={updateFormData}
         />

         <Appellations
           updateFormData={updateFormData}
           data={
             [{label: "Salutation", defaultValue: salutation},
              {label: "Full Name", defaultValue: name},
              {label: "Sort Name", defaultValue: sort_name}]
               }
          />

         <Aliases
           data={aliases}
           updateFormData= {updateFormData}
           />

         {/* JIRA CPMT-39 #Billing client needs to be converted to a display field
         <_Autosuggest
           label="Billing Client"
           data={billing_clients}
           updateFormData= {updateFormData}
           />
           */}

         <Countries
           updateFormData= {updateFormData}
           options={countries}
           items={[
             {label: "Nationality", defaultSelection: nationality},
             {label: "Residence", defaultSelection: residence},
             {label: "Domicile", defaultSelection: domicile}
           ]}
         />

         {/* JIRA CPMT-39 #Hide occupation
         <Row>
           <_InputText
             updateFormData = {updateFormData}
             label="Occupation" />
           <br/>
         </Row>
         */}

         <DateInput
           updateFormData= {updateFormData}
           title="Birth Date"
           defaultValue={birth_date}/>
         <DateInput
           updateFormData= {updateFormData}
           title="Deceased Date"
           defaultValue={deceased_date}/>

         <Contacts
           updateFormData= {updateFormData}
           items={[
             {label: "Phone", defaultValue: phone},
             {label: "Email", defaultValue: email}
            ]}
         />
        <Contacts
          updateFormData = {updateFormData}
          items={[
            {label: "Fax", defaultValue: fax},
            {label: "Other", defaultValue: telex}
          ]}
         />
        <AddressRoot {...addressData}
        />
      </form>
      {renderTransitionsButtons}
</Col>
 );
};
