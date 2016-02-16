//rename it to index.jsx
//root file for SelectRecordsToMerge
'use strict';

var React = require('react');
var EntitiesTable = require('./Table/EntitiesTable');
var SelectAllCheckboxes = require('./SelectAllCheckboxes');
var ListFilterDropdowns = require('./ListFilterDropdowns');
var ButtonToStep1 = require('./ButtonToStep1');

var SelectRecordsToMerge = React.createClass({
  render: function() {
    return (
    <div className="row">

      <div className="large-9 large-centered columns">
         <h1 style={{fontFamily: "'Comic Sans MS', 'Comic Sans', cursive"}}></h1>
      </div>
      <div className="row collapse postfix-round">
        <div className="large-9 columns">
         <input type="text" placeholder="Search by Name" />
        </div>
       <div className="large-3 columns">
         <a href="#" className="button postfix round">Search</a>
       </div>
     </div>
     <div className="row">
       <div className="large-9 large-centered columns"><ListFilterDropdowns /></div>
       <div className="large-3 large-offset-3 columns"><SelectAllCheckboxes /></div>
     </div>
     <div className="row">
       <div className="large-9 large-centered columns"><EntitiesTable /></div>
     </div> 
     <div className="row">
       <div className="large-9 large-centered columns"><ButtonToStep1 /></div>
     </div> 
 </div>
      );
  }
});

module.exports = SelectRecordsToMerge;
