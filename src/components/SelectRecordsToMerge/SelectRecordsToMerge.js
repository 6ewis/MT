//rename it to index.jsx
//root file for SelectRecordsToMerge
'use strict';

var React = require('react');
var EntitiesTable = require('./Table/EntitiesTable');
var EntitiesApi = require('../../api/entitiesApi');
var SelectAllCheckboxes = require('./SelectAllCheckboxes');
var ListFilterDropdowns = require('./ListFilterDropdowns');
var ButtonToStep1 = require('./ButtonToStep1');

var SelectRecordsToMerge = React.createClass({
  getInitialState: function() {
    return {dataFromBackEnd: [],
            term: ""};
  },
  componentDidMount: function() {
    this.fetchData();
  },
 fetchData: function(event = "") {
   //this part is not even needed anymore
   var self = this;
   console.log("here is the event:", event);
    EntitiesApi.fetchData(event).then(function(data){
     self.setState({dataFromBackEnd: EntitiesApi.getTableData(data)});
   });
 },
// searchData: function(event) {
//   console.log("Im in the search function");
//   this.fetchData(event.target.value).then(function(data){
//     self.setState({dataFromBackEnd: EntitiesApi.getTableData(data.fact_table)});
//   });
// },
  render: function() {
    return (
    <div className="row">

      <div className="large-9 large-centered columns">
         <h1 style={{fontFamily: "'Comic Sans MS', 'Comic Sans', cursive"}}></h1>
      </div>
      <div className="row collapse postfix-round">
        <div className="large-9 columns">
         <input value={this.state.term} 
                onChange={(event) => this.setState({term: event.target.value}) } 
                type="text" placeholder="Search by Name" />
        </div>
       <div className="large-3 columns">
         <a onClick={this.fetchData.bind(this, this.state.term)} className="button postfix round">Search</a>
       </div> </div>
     <div className="row">
       <div className="large-9 large-centered columns"><ListFilterDropdowns /></div>
       <div className="large-3 large-offset-3 columns"><SelectAllCheckboxes /></div>
     </div>
     <div className="row">
       <div className="large-9 large-centered columns"><EntitiesTable dataFromServer={this.state.dataFromBackEnd}/></div>
     </div> 
     <div className="row">
       <div className="large-9 large-centered columns"><ButtonToStep1 /></div>
     </div> 
 </div>
      );
  }
});

module.exports = SelectRecordsToMerge;
