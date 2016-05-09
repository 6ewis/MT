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
   //  could deserialize deserialize)concatenated_registered_address here into adress
   //  but prefer to do it in the serializer component of action
}

export default connect(mapStateToProps)(StateOfForm);
