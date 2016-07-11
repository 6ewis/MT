import React, {Component} from 'react';
import {Table, Panel, Col, Row} from 'react-bootstrap';
import R from 'ramda';

export default ({ EntityType, Name, Aliases, Title, "Birth Date": BirthDate, "Deceased Date": DeceasedDate, Nationality, Residence,
    Domicile, Email, Phone, Telex, Fax, addressesContainer}) => {

    const showAliases = R.isNil(Aliases) ? null : R.map((item) => `${item.label} ${item.value}. `, Aliases);

    const getAllProps = addressType => {
      const addressContainer = addressesContainer[addressType];
      return addressContainer ?
        R.props(['line_1', 'line_2', 'line_3', 'line_4', 'City', 'Country', "Postal/Zip Code", "Province/State"], addressContainer) :
        null;
      };

    const getRowPanelAddress = (item, index) => {
         return (
           <Row key={index}>
             <Col md={2}>{item}</Col>
           </Row>);
    };

    const showRowPanel = addressType => {
       const allproperties = getAllProps(addressType);
       return allproperties ?
         R.addIndex(R.map)(getRowPanelAddress, allproperties) :
         null;
   };

    const showPanel = (label, item) => {
       return (
         <Panel header={label}>
           <Col md={12}>
             {showRowPanel(item)}
           </Col>
        </Panel>);
    };

   const getEntitySpecificPanel = (item, label, object) => {
      return (
        <Panel key={label} header={label}>
          <Col md={12}>
              <Row className="">
                <Col md={5}><strong>Preferred Name</strong></Col>
                <Col md={5}><strong>Position(s)</strong></Col>
              </Row>
              <Row className="">
                <Col md={5}>{item["Preferred Name"]}</Col>
                <Col md={5}>{(item["Entity Specific"] || {}).clientName}</Col>
              </Row>
              <br/>
              <Row className="">
                <Col md={5}><strong>Preferred Address</strong></Col>
              </Row>
              {showRowPanel(label)}
          </Col>
       </Panel>
     );
  };

  const showEntitySpecificPanels = () => {
    const entitySpecificAddressesContainer = R.omit(['RegisteredAddress', 'MailingAddress', 'DividendAddress'], addressesContainer);
    const updatedEntitySpecificAddressesContainer = R.mapObjIndexed(getEntitySpecificPanel, entitySpecificAddressesContainer);
    return R.values(updatedEntitySpecificAddressesContainer);
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
            <td colSpan="2">{EntityType}</td>
            {/*static*/}
            <td colSpan="2">Yes</td>
          </tr>

          <tr>
            <td colSpan="2"><strong>Name</strong></td>
            <td colSpan="2"><strong>Aliases</strong></td>
          </tr>
          <tr>
            <td colSpan="2">{Name}</td>
            <td colSpan="2">{showAliases}</td>
          </tr>

          <tr>
            <td colSpan="2"><strong>Title</strong></td>
          </tr>
          <tr>
            <td colSpan="2">{Title}</td>
          </tr>

          <tr>
            <td colSpan="2"><strong>Birth Date</strong></td>
            <td colSpan="2"><strong>Deceased Date</strong></td>
          </tr>
          <tr>
            <td colSpan="2">{BirthDate}</td>
            <td colSpan="2">{DeceasedDate}</td>
          </tr>

          <tr>
            <td colSpan="2"><strong>Nationality</strong></td>
            <td colSpan="2"><strong>Country of Residence</strong></td>
            <td colSpan="2"><strong>Country of Domicile</strong></td>
          </tr>
          <tr>
            <td colSpan="2">{Nationality}</td>
            <td colSpan="2">{Residence}</td>
            <td colSpan="2">{Domicile}</td>
          </tr>

          <tr>
            <td colSpan="2"><strong>Email</strong></td>
            <td colSpan="2"><strong>Phone</strong></td>
          </tr>
          <tr>
            <td colSpan="2">{Email}</td>
            <td colSpan="2">{Phone}</td>
          </tr>

          <tr>
            <td colSpan="2"><strong>Telex</strong></td>
            <td colSpan="2"><strong>Fax</strong></td>
          </tr>
          <tr>
            <td colSpan="2">{Telex}</td>
            <td colSpan="2">{Fax}</td>
          </tr>
        </tbody>
      </Table>

      {/*static */}

     { showPanel('Registered', 'RegisteredAddress') }
     { showPanel('Mailing', 'MailingAddress') }
     { showPanel('Dividend', 'DividendAddress') }
     { showEntitySpecificPanels() }
    </div>
  );
};
