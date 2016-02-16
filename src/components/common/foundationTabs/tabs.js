'use strict';

var React = require('react');

var Tabs = React.createClass({
  render: function() {
    return (
         <ul className="tabs" data-tab> {this.props.children} </ul>
      );
  }
});

module.exports = Tabs;
