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
//this spinner sucks
import Address from './smart/addressRoot.js';

import R from 'ramda';

export default (
  {aliases, entity_type, countries, billing_clients,
   salutation, name, sort_name, birth_date, deceased_date,
   phone, email, fax, nationality, residence, domicile, telex,
   mailingAddressFields, registeredAddressFields, dividendAddressFields
  }) => {

  const addressData =
    {mailingAddressFields, registeredAddressFields, dividendAddressFields};
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
         />

         <Appellations
           data={
             [{label: "Salutation", defaultValue: salutation},
              {label: "Full Name", defaultValue: name},
              {label: "Sort Name", defaultValue: sort_name}]
               }
          />

         <Aliases data={aliases} />

         <_Autosuggest label="Billing Client" data={billing_clients}/>

         <Countries
           options={countries}
           items={[
             {label: "Nationality", defaultSelection: nationality},
             {label: "Residence", defaultSelection: residence},
             {label: "Domicile", defaultSelection: domicile}
           ]}
         />

         <Row>
           <_InputText label="Occupation" />
           <br/>
         </Row>

         <DateInput title="Birth Date" defaultValue={birth_date}/>
         <DateInput title="Deceased Date" defaultValue={deceased_date}/>

         <Contacts
            items={[
              {label: "Phone", defaultValue: phone},
              {label: "Email", defaultValue: email}
            ]}
         />
        <Contacts
            items={[
              {label: "Fax", defaultValue: fax},
              {label: "Other", defaultValue: telex}
            ]}
         />
        <Address {...addressData}
        />
      </form>
</Col>
 );
};
