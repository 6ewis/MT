import React, {Component} from 'react';
import {Col, Table, Row} from 'react-bootstrap';

export default ({data}) => {
  return (
    <div>
      <Row>
        <Col md={12}><h4> Positions </h4></Col>
      </Row>
      <Table striped bordered condensed hover>
        <thead>
           <tr>
             <th>Client Name&nbsp;<i className="fa fa-sort" aria-hidden="true"></i></th>
             <th>Matter&nbsp;<i className="fa fa-sort" aria-hidden="true"></i></th>
             <th>Manager/Administrator&nbsp;<i className="fa fa-sort" aria-hidden="true"></i></th>
             <th>Closed&nbsp;<i className="fa fa-sort" aria-hidden="true"></i></th>
             <th>Position&nbsp;<i className="fa fa-sort" aria-hidden="true"></i></th>
             <th>Ceased&nbsp;<i className="fa fa-sort" aria-hidden="true"></i></th>
           </tr>
        </thead>
        <tbody>
          <tr>
            <td>Roche Financial Investmensts Ltd</td>
            <td>007210</td>
            <td>Tucker Hall/Deborah Doherty</td>
            <td></td>
            <td>Secretaty</td>
          </tr>
          <tr>
            <td>Hoffmann-LA Roche Products Limited</td>
            <td>006600</td>
            <td>Tucker Hall/Deborah Doherty</td>
            <td></td>
            <td>Director</td>
          </tr>
          <tr>
            <td>Hoffmann-LA Roche Products Limited</td>
            <td>006600</td>
            <td>Tucker Hall/Deborah Doherty</td>
            <td></td>
            <td>Shareholder</td>
            <td>01/23/2012</td>
          </tr>
          <tr>
            <td>AEGIS INDEMNITY LIMITED</td>
            <td>000180</td>
            <td>John Ross/Vicki JOhnston</td>
            <td>08/07/2014</td>
            <td>Director</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
