import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectAccordion } from '../actions/index';
import CorporatePersonTab from '../components/corporatePersonTab/index';

class StateOfCorporatePersonTab extends Component {
    render() {
      return (
        <CorporatePersonTab {...this.props} />
      );
    }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectAccordion}, dispatch);
}

export default connect(null, mapDispatchToProps)(StateOfCorporatePersonTab);
