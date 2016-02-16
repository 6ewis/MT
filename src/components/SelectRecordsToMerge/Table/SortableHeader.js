'use strict';
//refactor to es6

var React = require('react');

var SortableHeader = React.createClass({
  getInitialState: function() {
    return {direction: this.props.defaultColumnDirection
            };
  },
  setDirection: function() {
    var direction = this.state.direction;
    
    if (direction == null || direction === "v") {
      this.setState({ direction: "^"}); //should set up a class
    }
    else {
      this.setState({direction: "v"}); //should set up a class instead
    }
  },
  handleHeaderClick: function(event) {
    event.preventDefault(); 
    //the state change willpropagate downwards and re-renders the child component
    this.setDirection();
    this.props.onClick(this.props.headerName, this.state.direction);
  },

  render: function() {
   var direction;
   if ((this.props.headerName === "Include") || (this.props.headerName.indexOf(this.props.headerClickedOn) === -1)) {
     direction = "";
   }
   else {
     direction = this.state.direction;
     if (direction === '^') {
       direction = <i className="fa fa-arrow-up"></i>;
     } else if (direction === 'v') {
       direction = <i className="fa fa-arrow-down"></i>;
     }
   } 
    return (
      <th onClick={this.handleHeaderClick}>
      {this.props.headerName}
      {direction }
      </th>
      );
  }
});

module.exports = SortableHeader;
