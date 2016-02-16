'use strict';

var React = require('react');

var Contents = React.createClass({
    render: function() {
      return (
           <div className="tabs-content">
             {this.props.children}
           </div>
        );
    }
});

module.exports = Contents;
