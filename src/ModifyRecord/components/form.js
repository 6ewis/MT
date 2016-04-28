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

export default (
  {aliases, entity_type, countries, billing_clients,
   salutation, name, sort_name}) => {

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
          {label: "Nationality", defaultSelection: "Canada"},
          {label: "Residence", defaultSelection: "Canada"},
          {label: "Domicile", defaultSelection: "Canada"}
        ]}
      />

{/*
      <Row>
        <_InputText label="Occupation" />
        <br/>
      </Row


      <DateInput title="Birth Date"/>
      <DateInput title="Deceased Date"/>

      <Contacts labels={["Phone", "Email"]} />
      <Contacts labels={["Fax", "Other"]} />

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
           data={[]}
           fieldName="address"
           />
          <_SplitButtonWithLabel
           label="Entity Specific"
           defaultSelection="None Selected"
           data={[]}
           fieldName="address"
           />

          <Row>
            <_Label name="Address"/>
          </Row>
          <Row>
            <Col md={10} style={{paddingLeft: '0px'}}>
              <_InputText />
            </Col>
            <Col md={2} style={{paddingLeft: '0px'}}>
              <i className="fa fa-trash-o" aria-hidden="true"></i>
            </Col>
          </Row>
          <Row>
            <Col md={10} style={{paddingLeft: '0px'}}>
              <_InputText />
            </Col>
          </Row>
          <Row>
            <Col md={10} style={{paddingLeft: '0px'}}>
              <_InputText />
            </Col>
          </Row>
          <Row>
            <Col md={10} style={{paddingLeft: '0px'}}>
              <_InputText />
            </Col>
          </Row>

        <br/>
        <Row>
          <Col md={10} style={{paddingLeft: '0px'}}>
            <_InputText label="City" />
          </Col>
        </Row>

        <br/>
        <Row>
          <Col md={10} style={{paddingLeft: '0px'}}>
            <_InputText label="Province/State" />
          </Col>
        </Row>

        <br/>
        <Row>
          <Col md={10} style={{paddingLeft: '0px'}}>
            <_InputText label="Country" />
          </Col>
        </Row>

        <br/>
        <_SplitButtonWithLabel
           label="New Field"
           defaultSelection="None Selected"
           data={[]}
           fieldName="address"
         />

        <Row>
          <Button style={{paddingLeft: '0px'}}>
            Add New Field
          </Button>
        </Row>
        </Well>
        </Row>
        */}
  </form>
</Col>
 );
};
