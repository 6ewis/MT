import React, {Component} from 'react';
import {Row} from 'react-bootstrap';
//third party lib
import R from 'ramda';
import Select from 'react-select';

export default class ReactSelect extends Component {
  //Note: Warning: FormControl is changing a controlled input of type text to be uncontrolled
  //it might be related to React 0.15 update
  //the third party lib did not take it into account
  //investigate
  constructor() {
    super();
    this.state = {
       currentValue: ""
    };
  }

  handleChange(obj) {
    if (!R.isNil(obj)) {
      this.setState({currentValue: obj.value});
      this.props.updateFormData(
        {client_name: obj.updateFormData.client_name,
         matter: obj.updateFormData.matter,
         positions: obj.updateFormData.positions});
    } else {
      this.setState({currentValue: ""});
    }
  }

  render() {
    return (
      <Row>
        <Select
          name="form-field-name"
          value= {this.state.currentValue}
          options= {this.props.data}
          onChange= {this.handleChange.bind(this)}
        />
      </Row>
    );
  }
}
