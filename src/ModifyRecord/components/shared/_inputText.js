import React, {Component} from 'react';
import {FormGroup, Row, ControlLabel, FormControl} from 'react-bootstrap';
import R from 'ramda';

export default class _InputText extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    };
  }

  getValidationState() {
    //return the validation here - either 'success' 'warning' or 'error'
  }

  handleChange(e) {
   this.setState({value: e.target.value});
  }

  renderLabel() {
    let {label} = this.props;
    return R.isNil(label) ? null : <ControlLabel>{label}</ControlLabel>;
  }

  render() {
    return (
      <FormGroup
          controlId={`formControls${this.props.label}`}
          validationState={this.getValidationState()}
       >
          {this.renderLabel()}
          <FormControl
            type="text"
            value={this.state.value}
            onChange={this.handleChange.bind(this)}
          />
          <FormControl.Feedback /> {/* Add .Feedback for feedback icon*/}
          {/*<HelpBlock>Validation is based on string length.</HelpBlock>*/}
      </FormGroup>
        );
  }
}
