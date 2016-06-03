import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Form from '../components/form';
import R from 'ramda';

class StateOfForm extends Component {
  constructor() {
    super();
    //formData
    this.state = {
      //we need to define the following since we don't want to overwrite it but update it
      addressContainer: {}
    };
  }

  updateAddressData(object) {
    //we van update/add existing keys
    //initial state of address container
    //addressContainer: {
    //  #1RegisteredAddress: {
    //    line_2: '2',
    //    line_3, '3'
    //  }
    //  #2DividendAddres: {
    //    Line2: "2",
    //    Line3: "3"
    //   }
    //}
    //we expect an object with a single key and value
    const firstKey = (anyObject) => R.keys(anyObject)[0];
    const rootObjectKey = firstKey(object); //#1RegisteredAddress
    const rootObjectValue = object[rootObjectKey]; //{Line_1: 1}
    //we also expect the nestedObject to have a single key and value
    const nestedObjectKey = firstKey(rootObjectValue); //Line_1
    const nestedObjectValue = R.prop(nestedObjectKey, rootObjectValue); //1
    const updateNestedProp =
     (acc, next) => R.assocPath([rootObjectKey, nestedObjectKey], nestedObjectValue, next);
    const updatedState =
      R.reduce(updateNestedProp, {}, [this.state.addressContainer]);

    //final state of address container
    //addressContainer: {
    //  #1RegisteredAddress: {
    //    Line_1: "1",
    //    line_2: '2',
    //    line_3, '3'
    //  }
    //  #2DividendAddres: {
    //    Line2: "2",
    //    Line3: "3"
    //   }
    //}
    console.log("I'm in the root updateAddressData function , and the state of the addressContainer is", updatedState);
    this.setState({addressContainer: updatedState});
  }
  updateFormData(object) {
    const firstKey = (anyObject) => R.keys(anyObject)[0];
    const rootObjectKey = firstKey(object);
    const rootObjectValue = object[rootObjectKey];
    /*eslint-disable */
    (firstKey(object) === 'addressesContainer') ?
      this.updateAddressData(object.addressesContainer) :
      this.setState({[rootObjectKey]: rootObjectValue}, () =>
        console.log("I'm in the root updateFormData function , and the state of the addressContainer is", this.state)
    );
    /*eslint-enable */
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
