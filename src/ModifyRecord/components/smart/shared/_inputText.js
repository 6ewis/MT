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

// componentWillReceiveProps() {
//  const {updateFormData, label} = this.props;
//  if (!R.isNil(updateFormData)) {
//  /*eslint-disable */
//  R.isNil(label) ?
//    updateFormData(this.state.value) :
//    updateFormData({[`${label}`]: this.state.value });
//  /*eslint-enable */
//  }
//}

  handleChange(e) {
    const {updateFormData, label} = this.props;
    this.setState({value: e.target.value});
    //if updateFormData is null nothing happens.
    //if the label is passed as props then this function is smart enough to use it
    //otherwise we expect the updateFormData function to be curried with the label
    //in which case we'd only need to pass the event value to updateFormData
    if (!R.isNil(updateFormData)) {
      /*eslint-disable */
    R.isNil(label) ?
      updateFormData(e.target.value) :
      updateFormData({[`${label}`]: e.target.value });
      /*eslint-enable */
    }
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
