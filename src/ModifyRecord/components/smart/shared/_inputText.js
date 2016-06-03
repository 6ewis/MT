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

 componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value});
 }

  handleChange(e) {
    this.setState({value: e.target.value});
    //if the label is passed as props then this function is smart enough to use it
    //otherwise we expect the updateFormData function to be curried with the label
    //then we'd only need to pass the event value to updateFormData
    /*eslint-disable */
    R.isNil(this.props.label) ?
      this.props.updateFormData(e.target.value) :
      this.props.updateFormData({[`${this.props.label}`]: e.target.value });
    /*eslint-enable */
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
