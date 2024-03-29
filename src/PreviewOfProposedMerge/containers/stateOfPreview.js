import React, {Component} from 'react';
import Preview from '../components/preview';
import { connect } from 'react-redux';
import R from 'ramda';
import { bindActionCreators } from 'redux';
import { initialize } from '../actions/index';

class StateOfPreview extends Component {
  render() {
    console.log("im in the stateOfPreview", this.props);
    return (
      <Preview {...this.props} />
    );
  }
}

function mapStateToProps({initialData}) {
   console.log("im in the stateOfPreview", initialData);
   return initialData;
}

export default connect(mapStateToProps, null)(StateOfPreview);
