import React, {Component} from 'react';
import Calendar from 'react-input-calendar';
import {Row} from 'react-bootstrap';

export default class _DateInput extends Component {
  renderDate() {
    return (
       <Row>
         <label htmlFor={this.props.title}> <strong> {this.props.title} </strong></label>
         <Calendar format="DD/MM/YYYY" date={this.props.value} />
         <br/>
       </Row>
    );
  }

  render() {
    return (
     this.renderDate()
    );
  }
}
