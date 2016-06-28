import React, {Component} from 'react';
import Form from '../components/form';
import { connect } from 'react-redux';
import R from 'ramda';
import { bindActionCreators } from 'redux';
import { update } from '../actions/index';

class StateOfForm extends Component {
  render() {
    let newProps =
      R.merge({updateFormData: this.props.update}, this.props);
    return (
      <Form {...newProps} />
    );
  }
}

function mapStateToProps({initialFormContent}) {
   return initialFormContent;
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({update}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(StateOfForm);
