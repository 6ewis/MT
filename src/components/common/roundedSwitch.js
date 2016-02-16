'use strict';

var React = require('react');

var RoundedSwitch = React.createClass({
  render: function() {
  var switchStyle = {
    backgroundColor: "rgb(48, 141, 48)"
  };

  var title = {
          fontSize: "25px",
          fontFamily: 'museo-slab, Georgia, "Times New Roman", Times, serif', 
          fontWeight: 'bold'};

    return (
    <div>
      <p style={title}> {this.props.title} </p>
      <div className="switch round large">
        <input id="exampleRadioSwitch3" type="radio" name="testGroup" />
        <label htmlFor="exampleRadioSwitch3" style={switchStyle}></label>
      </div>
    </div>
    ); 
   }
});

module.exports = RoundedSwitch;
