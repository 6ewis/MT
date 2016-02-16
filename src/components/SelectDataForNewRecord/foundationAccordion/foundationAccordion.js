'use strict';

var React = require('react');

var FoundationAccordion = React.createClass({
  render: function() {
    return (
      <dl className="accordion" data-accordion>
        {this.props.children}
      </dl>
      );
  }
});

module.exports = FoundationAccordion;
