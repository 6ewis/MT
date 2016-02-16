'use strict';

var React = require('react');
var EntityRow = require('./EntityRow');

//will have to order it - think about desialarizing the array
//As per the specification objects are unordered (the order is not guaranteed)
var ListRows = React.createClass({
  formatRowValues: function(element, index, array) {
      var rowValues = [];
      //iterateOverKey
      for (var key in element) {
        var cellValue = element[key];
        rowValues.push(cellValue);
      }
      
      //cant access key via props
      return <EntityRow index= {index} key= {index} rowValues= {rowValues} />;
  }, 
  render: function () {
   
    var listRowsWithValues = this.props.entitiesTableData.map(this.formatRowValues);
        
    return (
        <tbody>
         {listRowsWithValues}
        </tbody>
      );
  }
});

module.exports = ListRows;
