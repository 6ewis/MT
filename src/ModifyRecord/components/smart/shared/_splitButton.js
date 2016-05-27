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

  render() {
    return (
      <FormControl
        defaultValue={this.props.defaultSelection}
        componentClass="select"
        onChange={e =>
          this.props.updateFormData({label: this.props.label, value: e.target.value })}
        placeholder="select">

        {this.renderOptions()}

      </FormControl>
    );
  }
}
