'use strict';

var React = require('react');

var Tab = React.createClass({
  handleClick: function() {
    console.log("ehre are props:", this.props);
    this.props.dispatch();
  },
  render: function() { 
        var active = this.props.active ? "tab-title active" : "tab-title";
        return (
            <li onClick={this.handleClick} className = {active}><a href = {this.props.id}>{this.props.children}</a></li>
          );
      }
});

module.exports = Tab;
