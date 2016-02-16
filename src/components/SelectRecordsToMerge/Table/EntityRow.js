'use strict';

var React = require('react');
var CellWithCheckbox = require('./CellWithCheckbox');

var EntityRow = React.createClass({
  render: function() {
    var values = [];
    
    function formatValue(element, index, array) {
      values.push(<td key={index}>{element}</td>);
    }
    
    this.props.rowValues.forEach(formatValue);
    
    return (
      <tr>
        {values}
        <td><CellWithCheckbox rowValues={this.props.rowValues}/></td>
      </tr>
      );
  }
});

module.exports = EntityRow;
