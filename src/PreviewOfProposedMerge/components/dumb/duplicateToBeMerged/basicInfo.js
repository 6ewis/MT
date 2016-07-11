import React, {Component} from 'react';
import {Table, Panel, Col, Row} from 'react-bootstrap';
import Positions from './positions';
import R from 'ramda';

export default ({ entity_type, name, salutation, birth_date, deceased_date, nationality,
    residence, domicile, email, phone, telex, fax, concatenated_registered_address,
    concatenated_mailing_address, concatenated_dividend_address, positions }) => {

  //const showAliases = R.isNil(Aliases) ? null : R.map((item) => `${item.label} ${item.value}. `, Aliases);
  //what is the equivalent of aliases
  //we do have aliases
  const showAliases = null;

  const showPanel = (label, item) => {
    //will not use serializeddata anymore
     return (
       <Panel header={label}>
         <Col md={12}>
           {item}
         </Col>
      </Panel>);
  };

  return (

    <div>
     <Table hover>
       <tbody>
          <tr>
            <td colSpan="2"><strong>Entity Type</strong></td>
            <td colSpan="2"><strong>Conyers Employee</strong></td>
          </tr>
          <tr>
            <td colSpan="2">{entity_type}</td>
            {/*static*/}
            <td colSpan="2">Yes</td>
          </tr>

          <tr>
            <td colSpan="2"><strong>Name</strong></td>
            <td colSpan="2"><strong>Aliases</strong></td>
          </tr>
          <tr>
            <td colSpan="2">{name}</td>
            <td colSpan="2">{showAliases}</td>
          </tr>

          <tr>
            <td colSpan="2"><strong>Title</strong></td>
          </tr>
          <tr>
            <td colSpan="2">{salutation}</td>
          </tr>

          <tr>
            <td colSpan="2"><strong>Birth Date</strong></td>
            <td colSpan="2"><strong>Deceased Date</strong></td>
          </tr>
          <tr>
            <td colSpan="2">{birth_date}</td>
            <td colSpan="2">{deceased_date}</td>
          </tr>

          <tr>
            <td colSpan="2"><strong>Nationality</strong></td>
            <td colSpan="2"><strong>Country of Residence</strong></td>
            <td colSpan="2"><strong>Country of Domicile</strong></td>
          </tr>
          <tr>
            <td colSpan="2">{nationality}</td>
            <td colSpan="2">{residence}</td>
            <td colSpan="2">{domicile}</td>
          </tr>

          <tr>
            <td colSpan="2"><strong>Email</strong></td>
            <td colSpan="2"><strong>Phone</strong></td>
          </tr>
          <tr>
            <td colSpan="2">{email}</td>
            <td colSpan="2">{phone}</td>
          </tr>

          <tr>
            <td colSpan="2"><strong>Telex</strong></td>
            <td colSpan="2"><strong>Fax</strong></td>
          </tr>
          <tr>
            <td colSpan="2">{telex}</td>
            <td colSpan="2">{fax}</td>
          </tr>
        </tbody>
      </Table>

      {/*static */}

     { showPanel('Registered', concatenated_registered_address) }
     { showPanel('Mailing', concatenated_mailing_address) }
     { showPanel('Dividend', concatenated_dividend_address) }
     <Positions positions={positions} />
    </div>
  );
};
