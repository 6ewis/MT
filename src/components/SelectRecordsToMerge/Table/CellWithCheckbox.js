'use strict';
//This file is screaming refactor me
//
var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var savedData = [];
var ToggleAllCheckboxListenerMixin = {
  getInitialState: function() {
    return {selected: false,
            id: null 
           };
  },
  componentDidMount: function(){
    var me = this;

    //Detect if some child has been selected
    document.addEventListener( 'selectAllCheckBoxes', function( event ){
      console.log('event received' + JSON.stringify(event));
      me.setState({ selected: event.selected });
      event.stopPropagation();
    }, false);
  }, 
  clickHandler: function(e) {
    this.setState({selected: !this.state.selected});
    console.log("single selection:" + e.target.value); // debugging 
  }
};

var CellWithCheckbox = React.createClass({
  mixins: [ToggleAllCheckboxListenerMixin],
  //could be in a mixin
 _storeInIndexdb: function() {
   console.log(this.props.rowValues);
   var rowValues = this.props.rowValues;
   var me = this;

   console.log(ReactDOM.findDOMNode(this.refs.inputText).checked + "is it checked?");
   console.log(!this.state.id + "hows the state id");
   if (ReactDOM.findDOMNode(this.refs.inputText).checked && !this.state.id) {
      console.log("I am checked");
      //saved in indexdb
      return window.db.selectedEntities.put({
        Name: rowValues[0],
        CPREF: rowValues[1],
        registeredAddress: rowValues[2],
        entityType: rowValues[3],
        openMatters: rowValues[4],
        closedMatters: rowValues[5]
      }).then(function(id) {
       //saved in array
        savedData.push({
         Id: id,
         Name: rowValues[0],
         CPREF: rowValues[1],
         registeredAddress: rowValues[2],
         entityType: rowValues[3],
         openMatters: rowValues[4],
         closedMatters: rowValues[5]
        });
        //
        me.setState({id: id}); //being re-render
        console.log("the item was successfully added to indexdb: " + id);
      }).catch(function(error) {
     console.log("there was an error while trying to save the selected item:" + error);
     });
   }

   else if (!ReactDOM.findDOMNode(this.refs.inputText).checked && this.state.id) {
     console.log("I am not checked");
     //removed in indexdb
     return window.db.selectedEntities.delete(this.state.id).then(function(id) {
       //removed in array
       _.remove(savedData, function(object) {
         return object.id === id;
       });
       //
       me.setState({id: null});
       console.log("the item was successfully removed to indexdb: " + id);
       }).catch(function() {
         console.log("there was an error while trying to remove the selected item");
       });
     }
  },
 componentDidUpdate: function(prevProps, prevState) {
   if (prevState.selected !== this.state.selected) {
    var me = this;
    var promise = new Promise(
      function(resolve, reject) {
        resolve(me._storeInIndexdb());
      }
    );
   }

   // promise.then(function() {
   //   console.log("This is a message from the componentDidUpdate: " + savedData);
   //   //not doing anything with it for now 
   //   //were considering storing it in memory instead
   //   //this need to be refactored. This code is ugly
   //   window.globalSavedData = savedData;
   // });
 },
 render: function() {
    return (
      <input ref="inputText" type="checkbox" checked={this.state.selected} onChange={this.clickHandler}/>
      );
  }
});

module.exports = CellWithCheckbox;
