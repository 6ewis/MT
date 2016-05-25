import React, {Component} from 'react';
import {Row, SplitButton, Button, MenuItem} from 'react-bootstrap';

import _Label from '../dumb/shared/_label';
import _SplitButton from './shared/_splitButton';
import R from 'ramda';

export default class Aliases extends Component {
  constructor(props) {
    super(props);
    this.state = {
     uniqueKey: 0,
     aliases: [],
     data: props.data};
  }

  updateFormData(newState) {
    this.props.updateFormData(newState);
    this.setState({aliases: newState});
  }

  IsUniqueKeyExistsInState(uniqueKey) {
    const test = R.contains(uniqueKey, R.map(R.prop('uniqueKey'), this.state.aliases));
    console.log('uniqueKey:', uniqueKey);
    console.log('uniqueKeyExists', test);
    return test;
  }

  appendToAliases(uniqueKey, newValue) {
    const newState =
      R.append({uniqueKey: uniqueKey, value: newValue, label: 'AKA'}, this.state.aliases);
    console.log("appenedToAliases:", newState);
    this.updateFormData(newState);
  }

  updateObjectWithKey(uniqueKey, transformation) {
    const newState =
       R.map(R.when(R.propEq('uniqueKey', uniqueKey), R.evolve(transformation)))(this.state.aliases);
     console.log("updateObjectWithKey", newState);
     this.updateFormData(newState);
  }

  handleChange(uniqueKey, event) {
    const newValue = event.target.value;
    if (this.IsUniqueKeyExistsInState(uniqueKey) === false) {
      this.appendToAliases(uniqueKey, newValue);
     } else {
      const transformation = {value: () => newValue};
      this.updateObjectWithKey(uniqueKey, transformation);
    }
  }

  updateSplitData(uniqueKey, data) {
    console.log("inupdateSplitData", data);
    const transformation = {label: () => data.value};
    this.updateObjectWithKey(uniqueKey, transformation);
  }

  aliasesWithoutObjectWith(uniqueKey) {
    console.log("aliaseswithoutbordersObjectWith: ", R.reject(R.propEq('uniqueKey', uniqueKey), this.state.aliases));
    return R.reject(R.propEq('uniqueKey', uniqueKey), this.state.aliases);
  }

  findObjectBasedOnKey(uniqueKey) {
    console.log("finobjectbasedONKEY: ", R.find(R.propEq('uniqueKey', uniqueKey))(this.state.aliases));
    return R.find(R.propEq('uniqueKey', uniqueKey))(this.state.aliases);
  }

  renderAlias(uniqueKey, aliasValue) {
    return (
      <Row key={uniqueKey} className="form-inline">
         <_SplitButton
           updateFormData={this.updateSplitData.bind(this, uniqueKey)}
           options={[ 'AKA', 'FKA']}/>
         &nbsp;
         <input
           onChange={this.handleChange.bind(this, uniqueKey)}
           type="text"
           value={this.findObjectBasedOnKey.value}
           className="form-control"/>
         &nbsp;
         <i style={{cursor: "pointer"}}
            onClick ={() => this.aliasesWithoutObjectWith(uniqueKey)}
            className="fa fa-minus-circle makeItRed" ariaHidden="true">
         </i>
         <br/>
      </Row>
    );
  }

  renderAliases() {
    return this.state.data.map((item, index) =>
      this.renderAlias(index, item.alias));
  }

  render() {
    return (
      <div>
        <Row>
          <_Label name="Aliases" />
        </Row>
         {this.renderAliases()}
        <br/>
        <Row>
          <Button
            bsStyle="primary"
            onClick={() => this.setState({data: R.append({alias: ""}, this.state.data)})}>
              + Add Alias
          </Button>
        </Row>
        <br/>
      </div>
    );
 }
}
//minus
//initialState--data
