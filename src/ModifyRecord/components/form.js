import React, {Component } from 'react';
import {Input, Row, Col, Button, Well} from 'react-bootstrap';
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

import R from 'ramda';
import _Spinner from '../../shared/_Spinner.js';

export default (
  {aliases, entity_type, countries, billing_clients,
   salutation, name, sort_name, birth_date, deceased_date,
   phone, email, fax, matter_specific_addresses,
   deserialized_concatenated_registered_address,
   nationality, residence, domicile, telex}) => {

   if (R.isEmpty(billing_clients)) {return <_Spinner/>; }

           //this is for addresses - will be extracted in its own component- WIP
           const onlyTheRegisteredAddresses = R.filter( R.propEq('address_type', 'Registered'), matter_specific_addresses);
           const returnEntitySpecificOption = (item) =>
             `${item.client_name} (M#${item.matter}) \n
              ${item.positions}`;
           const options = R.map(returnEntitySpecificOption, onlyTheRegisteredAddresses);

 //utility func
 const maybe = (method) => {
   if (!R.isNil(deserialized_concatenated_registered_address)) {
     return !R.isNil(deserialized_concatenated_registered_address.registeredAddressFields) ?
       deserialized_concatenated_registered_address.registeredAddressFields[method] :
       null;
   }
 };

 return (
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

      <br/>
      <Row>
        <hr/>
        <Button
          bsStyle="primary"
          >
            + Add Address
        </Button>
      </Row>

      <br/>
        <Row>
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

          <_SplitButtonWithLabel
           label="Address Type"
           defaultSelection="Registered"
           disabled= {true}
           />
          <_SplitButtonWithLabel
           label="Entity Specific"
           defaultSelection="~ None Selected ~"
           />

          <Row>
            <_Label name="Address"/>
          </Row>
          <Row>
            <Col md={10} style={{paddingLeft: '0px'}}>
              <_InputText
                value={maybe('regaddr_line_1')}/>
            </Col>
            <Col md={2} style={{paddingLeft: '0px'}}>
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </Col>
          </Row>
          <Row>
            <Col md={10} style={{paddingLeft: '0px'}}>
              <_InputText
                value={maybe('regaddr_line_2')}
              />
            </Col>
          </Row>

          <Row>
            <Col md={10} style={{paddingLeft: '0px'}}>
              <_InputText
                value={maybe('regaddr_line_3')}
              />
            </Col>
          </Row>
          <Row>
            <Col md={10} style={{paddingLeft: '0px'}}>
              <_InputText
                value={maybe('regaddr_line_4')}
              />
            </Col>
          </Row>

        <br/>
        <Row>
          <Col md={10} style={{paddingLeft: '0px'}}>
            <_InputText label="City"
               value={maybe('regaddr_locality')}
            />
          </Col>
        </Row>

        <br/>
        <Row>
          <Col md={10} style={{paddingLeft: '0px'}}>
            <_InputText label="Province/State"
               value={maybe('regaddr_postal_code')}
            />
          </Col>
        </Row>

        <br/>
        <Row>
          <Col md={10} style={{paddingLeft: '0px'}}>
            <_InputText label="Country"
               value={maybe('regaddr_country_name')}
            />
          </Col>
        </Row>

        <br/>
        <_SplitButtonWithLabel
           label="New Field"
           defaultSelection="None Selected"
         />

        <Row>
          <Button style={{paddingLeft: '0px'}}>
            Add New Field
          </Button>
        </Row>
        </Well>
        </Row>
  </form>
</Col>
 );
};
