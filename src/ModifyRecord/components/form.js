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

import R from 'ramda';

export default (
  {updateFormData, aliases, entity_type, countries, billing_clients,
   salutation, name, sort_name, birth_date, deceased_date,
   phone, email, fax, nationality, residence, domicile, telex,
   mailingAddressFields, registeredAddressFields, dividendAddressFields,
   matter_positions
  }) => {

  const matterPositions = matter_positions;
  const addressData =
    {mailingAddressFields,
     registeredAddressFields,
     dividendAddressFields,
     matterPositions,
     updateFormData,
     countries};
   // check that the requests made to the server is done in React.js
   //  use a middleware
   return (R.isEmpty(billing_clients)) ?
     <_Spinner/> :
     (
     <Col md={12}>
      <form>
         <_SplitButtonWithLabel
           label="Type"
           defaultSelection={entity_type}
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

         <_Autosuggest
           label="Billing Client"
           data={billing_clients}
           updateFormData= {updateFormData}
           />

         <Countries
           updateFormData= {updateFormData}
           options={countries}
           items={[
             {label: "Nationality", defaultSelection: nationality},
             {label: "Residence", defaultSelection: residence},
             {label: "Domicile", defaultSelection: domicile}
           ]}
         />

         <Row>
           <_InputText
             updateFormData = {updateFormData}
             label="Occupation" />
           <br/>
         </Row>

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
</Col>
 );
};
