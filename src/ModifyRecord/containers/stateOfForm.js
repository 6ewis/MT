import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '../components/form';

class StateOfForm extends Component {
    render() {
      return (
        <Form {...this.props} />
      );
    }
}

function mapStateToProps({formContent}) {
   return formContent;
}

export default connect(mapStateToProps)(StateOfForm);
