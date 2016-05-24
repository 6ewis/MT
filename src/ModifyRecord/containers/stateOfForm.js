import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '../components/form';
import R from 'ramda';

class StateOfForm extends Component {
  constructor() {
    super();
    //formData
    this.state =
      {
      type: null,
      salutation: null,
      fullName: null,
      sortName: null,
      aliases: [{label: "", value: ""}],
      billingClient: null,
      nationality: null,
      residence: null,
      domicile: null,
      occupation: null,
      birthDate: null,
      deceasedDate: null,
      phone: null,
      email: null
      };
  }

  updateFormData(field) {
    this.setState({[field.label]: field.value}); 
  }

  render() {
    let newProps =
      R.merge({updateFormData: this.updateFormData.bind(this)}, this.props);
    return (
      <Form {...newProps} />
    );
  }
}

function mapStateToProps({formContent}) {
   return formContent;
  }

export default connect(mapStateToProps)(StateOfForm);
