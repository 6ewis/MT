'use strict';

var React = require('react');

var Content = React.createClass({
     render: function() {
      var active = this.props.active ? "content active" : "content";
      return (
       <div className={active} id={this.props.id}>
         <div>{this.props.children}</div>
      </div> );
     }
});

module.exports = Content;
