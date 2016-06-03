import React, {Component} from 'react';
import Calendar from 'react-input-calendar';
import {Row} from 'react-bootstrap';
import _Label from './shared/_label';

export default class DateInput extends Component {
  constructor() {
    super();
    this.state = {date: null};
  }

  handleUpdateDataForm(value) {
    const {updateFormData, title} = this.props;
    updateFormData({[`${title}`]: value });
    this.setState({date: value});
  }

  render() {
     const {defaultValue, title} = this.props;
     return (
        <div>
          <Row>
            <_Label name={title} />
          </Row>
          <Row>
            <Calendar
              format="DD/MM/YYYY"
              date={this.state.date || defaultValue}
              onChange={this.handleUpdateDataForm.bind(this)}
            />
          </Row>
          <br/>
       </div>
     );
  }
}
