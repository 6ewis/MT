import React, {Component} from 'react';
import {FormGroup, Row, ControlLabel, FormControl} from 'react-bootstrap';

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

  render() {
    return (
      <FormGroup
          controlId={`formControls${this.props.label}`}
          validationState={this.getValidationState()}
       >
        <ControlLabel>{this.props.label}</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <FormControl.Feedback /> {/* Add .Feedback for feedback icon*/}
          {/*<HelpBlock>Validation is based on string length.</HelpBlock>*/}
      </FormGroup>
        );
  }
}
