import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectAccordion, clickX } from '../actions/index';
import CorporatePersonTab from '../components/corporatePersonTab/index';

class StateOfCorporatePersonTab extends Component {
    render() {
      return (
        <CorporatePersonTab {...this.props} />
      );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectAccordion,
                             clickX}, dispatch);
}

export default connect(null, mapDispatchToProps)(StateOfCorporatePersonTab);
