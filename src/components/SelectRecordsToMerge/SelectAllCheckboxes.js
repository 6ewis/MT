'use strict';

var React = require('react');

var SelectAllCheckboxes = React.createClass({
  getInitialState: function() {
    return {selectAll: false};
  },
// use the function handleClick to emit an event upwards
  handleClick: function(e) {
    e.preventDefault();
    this.setState({selectAll: !this.state.selectAll}, function() {
      var event = document.createEvent('Event');
      event.selected = this.state.selectAll;
      event.initEvent('selectAllCheckBoxes', true, true);
      document.dispatchEvent( event );
    }.bind(this));
   
  },

  render: function() {
    return (
      <div>
        Select <span onClick={this.handleClick} style={{color: "blue", cursor: 'pointer'}}> {this.state.selectAll ? 'None' : 'All'} </span> 
      </div>
      );
  }
});

module.exports = SelectAllCheckboxes;
