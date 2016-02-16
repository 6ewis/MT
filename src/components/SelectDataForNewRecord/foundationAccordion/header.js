'use strict';

var React = require('react');
var ReactDOM = require('react-dom');

// use case: <Tab name="Accordion 1"/>
var Header = React.createClass({
  getInitialState: function() {
    return {backgroundColor: "#EFEFEF", active: null};
  },
  handlerClick: function(e) {
    var elementWithContent = ReactDOM.findDOMNode(this.refs.header).nextSibling;
    var className = elementWithContent.getAttribute('class');
    if (className.indexOf("active") === -1) {
     //note that active is added to the class only after we click 
      //we make the background blue
     this.setState({backgroundColor: "#6CBEE4"}, function() {
          this.props.onClick(); //dispatch sidebar
        });
    } else {
      //we make the background grey
     this.setState({backgroundColor: "#EFEFEF"});
    // this.setState({active: true});
    }
  },
  render: function() {
    var me = this;
    var _addTabName = function(element) {
      return React.cloneElement(element, {tabName: me.props.name.split(" ").join("")});
    };

    var contentWithTabName = React.Children.map(this.props.children, _addTabName);

    return (
      <dd className="accordion-navigation">
       <a ref="header" href = {"#" + this.props.name.split(" ").join("") } style={{backgroundColor: this.state.backgroundColor}} 
          onClick={this.handlerClick}> {this.props.name}
       </a>
        {contentWithTabName}
      </dd>
      );
  }
});

module.exports = Header;
