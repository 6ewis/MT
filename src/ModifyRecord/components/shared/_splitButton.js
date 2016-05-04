import React, {Component} from 'react';
import {FormControl, Row, SplitButton, MenuItem} from 'react-bootstrap';
import R from 'ramda';

export default class _SplitButton extends Component {
  //note: this is a class based component;
  //we might need to set up the state when we'll go to to last page
  renderOptions() {
    const {options, defaultSelection} = this.props;
    return R.isNil(options)
      ?
      <option value={defaultSelection}>{defaultSelection}</option>
      :
      options.map((item, index) =>
        <option key={index} value={item}>{item}</option>);
  }

  render() {
    return (
      <FormControl defaultValue={this.props.defaultSelection} componentClass="select" placeholder="select">
       {this.renderOptions()}
      </FormControl>
    );
  }
}
