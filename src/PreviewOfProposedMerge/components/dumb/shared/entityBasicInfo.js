import React, {Component} from 'react';
import {Table, Panel, Col, Row} from 'react-bootstrap';
import R from 'ramda';

export default (props) => {
    const { EntityType, Name, Aliases, Title, "Birth Date": BirthDate, "Deceased Date": DeceasedDate, Nationality, Residence,
  Domicile, Email, Phone, Telex, Fax } = props;
    console.log('the props are', props)


  const showAliases = R.isNil(Aliases) ? null : R.map((item) => `${item.label} ${item.value}. `, Aliases);

  return (
    <div>
     <Table hover>
       <tbody>
          <tr>
            <td><strong>Entity Type</strong></td>
            <td><strong>Conyers Employee</strong></td>
          </tr>
          <tr>
            <td>{EntityType}</td>
            {/*static*/}
            <td>Yes</td>
          </tr>

          <tr>
            <td><strong>Name</strong></td>
            <td><strong>Aliases</strong></td>
          </tr>
          <tr>
            <td>{Name}</td>
            <td>{showAliases}</td>
          </tr>

          <tr>
            <td><strong>Title</strong></td>
          </tr>
          <tr>
            <td>{Title}</td>
          </tr>

          <tr>
            <td><strong>Birth Date</strong></td>
            <td><strong>Deceased Date</strong></td>
          </tr>
          <tr>
            <td>{BirthDate}</td>
            <td>{DeceasedDate}</td>
          </tr>

          <tr>
            <td><strong>Nationality</strong></td>
            <td><strong>Country of Residence</strong></td>
            <td><strong>Country of Domicile</strong></td>
          </tr>
          <tr>
            <td>{Nationality}</td>
            <td>{Residence}</td>
            <td>{Domicile}</td>
          </tr>

          <tr>
            <td><strong>Email</strong></td>
            <td><strong>Phone</strong></td>
          </tr>
          <tr>
            <td>{Email}</td>
            <td>{Phone}</td>
          </tr>

          <tr>
            <td><strong>Telex</strong></td>
            <td><strong>Fax</strong></td>
          </tr>
          <tr>
            <td>{Telex}</td>
            <td>{Fax}</td>
          </tr>
        </tbody>
      </Table>

      {/*static */}
      <Panel header="Registered">
        <Col md={12}>
            <Row>
              <Col md={2} Clarenden House></Col>
            </Row>
            <Row>
              <Col md={2}> 2 church Street</Col>
            </Row>
            <Row>
              <Col md={2}>Hamilton</Col>
            </Row>
            <Row>
              <Col md={2}>Bermuda</Col>
            </Row>
        </Col>
      </Panel>
    </div>
  );
};
