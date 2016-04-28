import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import { selectAccordion, clickX } from '../actions/index';
import Form from '../components/form';

class StateOfForm extends Component {
    render() {
      return (
        <Form {...this.props} />
      );
    }
}

//function mapDispatchToProps(dispatch) {
//  return bindActionCreators({selectAccordion,
//                             clickX}, dispatch);
//}

function mapStateToProps({formContent}) {
  console.log("my formCOntent is", formContent);
  return formContent;
//  const {aliases, entity_type, countries, billing_clients} = formContent;
//  return { aliases: aliases,
//           entity_type: entityTypes,
//           countries: countries,
//           billingClients: billing_clients
//         };
}

//export default connect(mapStateToProps, mapDispatchToProps)(StateOfCorporatePersonTab);
export default connect(mapStateToProps)(StateOfForm);
