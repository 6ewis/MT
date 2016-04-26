import React, {Component} from 'react';
import Calendar from 'react-input-calendar';
import {Row} from 'react-bootstrap';
import _Label from './shared/_label';

export default class _DateInput extends Component {
  renderDate() {
    return (
       <div>
         <Row>
           <_Label name={this.props.title} />
         </Row>
         <Row>
           <Calendar format="DD/MM/YYYY" date={this.props.value} />
         </Row>
         <br/>
      </div>
    );
  }

  render() {
    return (
     this.renderDate()
    );
  }
}
