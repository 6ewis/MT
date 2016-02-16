'use strict';

var React = require('react');

//use case: <Content className="active"> //active means that the content is visible
var Content = React.createClass({ 
  render: function() {
    var active = this.props.active ? "content active" : "content";
    return (
      <div id={this.props.tabName} className={active}>
      {this.props.children}
      </div>
      );
  }
});

module.exports = Content;
