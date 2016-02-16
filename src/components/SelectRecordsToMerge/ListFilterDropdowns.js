'use strict';

var React = require('react');
var FilterDropdown = require('./FilterDropdown');

var ListFilterDropdowns = React.createClass({
  render: function() {
    return (
      <div>
          <FilterDropdown title={"Matters"} content= { ["Open", "Closed", "None"] } />
          <FilterDropdown title={"Country"} content= { ["Bermuda", "United States", "Canada", "United Kingdom"] } />
          <FilterDropdown title={"EntityType"} content= { ["Individual", "Company", "Partnership", "Trust"] }/>
      </div>
      );
  }
});

module.exports = ListFilterDropdowns;
