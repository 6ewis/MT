import React, {Component} from 'react';
import {Row, SplitButton, Button, MenuItem} from 'react-bootstrap';

import _Label from '../dumb/shared/_label';
import _SplitButton from './shared/_splitButton';
import R from 'ramda';

// Flow of data:
/* #1 Add Prop.data to initialData -->
   #2 set this.state.aliases to initialData() -->
   #3 loop through this.state.aliases and render each item ->
   #4   view -->
   #5     if user click Add Button --> Add new item to this.state.aliases and start again from point 2
   #6     if user click on 'minus' icon --> remove corresponding alias from this.state.aliases and start again from point 2
*/

export default class Aliases extends Component {
  constructor(props) {
    super(props);
    this.state = {
     aliases: this.initializeAliases(props),
     data: props.data};
  }

  //Initialization
  initializeAliases(props) {
    return props.data.map((item, index) => {
      return {uniqueKey: index, value: item.alias, label: item.alias_type };
    });
  }

  updateState(newState) {
    //we need to keep track of the uniqueKey and the index so we cannot remove
    //the item with uniqueKey: undefined in the state of the component.
    //However we can remove those orphans items when we call updateFormData
    const removedOrphans = R.filter((item) => item.uniqueKey !== undefined);
    this.setState({aliases: newState},
      () => this.props.updateFormData({Aliases: removedOrphans(this.state.aliases)}));
  }

  //utility function
  IsUniqueKeyExistsInState(uniqueKey) {
    return R.contains(uniqueKey, R.map(R.prop('uniqueKey'), this.state.aliases));
  }

  appendToAliases(uniqueKey, newValue) {
    const newState =
      R.append({uniqueKey: uniqueKey, value: newValue, label: 'AKA'}, this.state.aliases);
    this.updateState(newState);
  }

  updateObjectWithKey(uniqueKey, transformation) {
    const newState =
       R.map(R.when(R.propEq('uniqueKey', uniqueKey), R.evolve(transformation)))(this.state.aliases);
     this.updateState(newState);
  }

  findObjectBasedOnKey(uniqueKey) {
    return R.find(R.propEq('uniqueKey', uniqueKey))(this.state.aliases);
  }

  controlledValue(uniqueKey) {
    //newly appended aliases do not have a value yet
    return (this.findObjectBasedOnKey(uniqueKey) || {}).value;
  }

  nextIdValue() {
    const arrayOfIds = R.pluck('uniqueKey', this.state.aliases);
    return R.add(1, R.reduce(R.max, 0, arrayOfIds));
  }

  //handlers
  handleChange(uniqueKey, event) {
    const newValue = event.target.value;
    if (this.IsUniqueKeyExistsInState(uniqueKey) === false) {
      this.appendToAliases(uniqueKey, newValue);
     } else {
      const transformation = {value: () => newValue};
      this.updateObjectWithKey(uniqueKey, transformation);
    }
  }

  handleSplitData(uniqueKey, data) {
    const transformation = {label: () => data.alias};
    this.updateObjectWithKey(uniqueKey, transformation);
  }

  handleRemoveAliasWithKey(uniqueKey) {
    //we cannot actually remove the key just yet since when we loop through this.state
    //the index which is also used as our uniquekey depend on it
    //otherwise each index will be shifted to the left (= -1)
    const transformation = {uniqueKey: () => undefined};
    //undefined is tracked as items that should not be displayed
    this.updateObjectWithKey(uniqueKey, transformation);
  }

  handleAddButton() {
    //We assign it to the state.aliases in order to have a unique index_id and keep track
    //of it
    this.setState({
      aliases: R.append({
      value: "",
      uniqueKey: this.nextIdValue(),
      label: "AKA"
      }, this.state.aliases)});
  }

  renderAlias(index, alias) {
    return R.isNil(alias.uniqueKey) ?
      null :
      (
        <Row key={index} className="form-inline">
           <_SplitButton
             label="alias"
             updateFormData={this.handleSplitData.bind(this, index)}
             defaultSelection={alias.label}
             options={[ 'AKA', 'FKA']}/>
           &nbsp;
           <input
             onChange={this.handleChange.bind(this, index)}
             type="text"
             value={this.controlledValue(index)}
             className="form-control"/>
           &nbsp;
           <i style={{cursor: "pointer"}}
              onClick ={() => this.handleRemoveAliasWithKey(index)}
              className="fa fa-minus-circle makeItRed" ariaHidden="true">
           </i>
           <br/>
        </Row>
    );
  }

  renderAliases() {
    return this.state.aliases.map((alias, index) =>
      this.renderAlias(index, alias));
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
            onClick={this.handleAddButton.bind(this)}>
              + Add Alias
          </Button>
        </Row>
        <br/>
      </div>
    );
 }
}
