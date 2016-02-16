'use strict';

var React = require('react');

var FoundationTabs = React.createClass({
  render: function() {
    return (
      <div> {this.props.children} </div>
    ); 
  }
});

module.exports = FoundationTabs;
