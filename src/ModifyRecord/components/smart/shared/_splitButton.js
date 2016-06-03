import React, {Component} from 'react';
import {FormControl, Row, SplitButton, MenuItem} from 'react-bootstrap';
import R from 'ramda';

export default class _SplitButton extends Component {
  renderOptions() {
    const {options, defaultSelection} = this.props;

    return R.isNil(options)
      ?
      <option value={defaultSelection}>{defaultSelection || "None Selected"}</option>
      :
      R.prepend("None Selected", options).map((item, index) =>
        <option key={index} value={item}>{item}</option>);
  }

  onChangeHandler(e) {
   //updateFormData is progagated up to the form.js component
   this.props.updateFormData({[`${this.props.label}`]: e.target.value });
   //if there's an onSelect props, it sent the event to the parent element
   /*eslint-disable */
   R.isNil(this.props.onSelect) ?
     null :
     this.props.onSelect(e);
   /*eslint-enable */
  }

  render() {
    return (
      <FormControl
        defaultValue={this.props.defaultSelection}
        componentClass="select"
        onChange={this.onChangeHandler.bind(this)}
        placeholder="select">

        {this.renderOptions()}

      </FormControl>
    );
  }
}
