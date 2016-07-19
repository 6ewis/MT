import React, {Component} from 'react';
import {Col, Table, Row} from 'react-bootstrap';
//third party libs
import R from 'ramda';
import moment from 'moment';

export default ({positions}) => {
  const formatDate = (date) => (date === null) ? date : moment(date).format('L');
  return R.isNil(positions) ?
    null :
    (
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
          {R.addIndex(R.map)((item, index) => {
            return (<tr key={index}>
              <td>{item.client_name}</td>
              <td>{item.matter}</td>
              <td>{`${item.manager_name}/${item.administrator_name}`}</td>
              <td>{formatDate(item.mclosedt)}</td>
              <td>{item.position_name}</td>
              <td>{formatDate(item.end_date)}</td>
            </tr>); },
            positions
          )}
        </tbody>
      </Table>
    </div>
   );
};
