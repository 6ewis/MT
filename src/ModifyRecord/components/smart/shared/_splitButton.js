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

  changeHandler(e) {
   //updateFormData is progagated up to the form.js component 
   this.props.updateFormData({label: this.props.label, value: e.target.value });
   //if there's an onSelect props, it sent the event to the parent element
   this.props.onSelect ? this.props.onSelect(e) : null;
  }

  render() {
    return (
      <FormControl
        defaultValue={this.props.defaultSelection}
        componentClass="select"
        onChange={this.changeHandler.bind(this)}
        placeholder="select">

        {this.renderOptions()}

      </FormControl>
    );
  }
}
