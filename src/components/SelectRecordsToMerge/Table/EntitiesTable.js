'use strict';

var React = require('react');
var EntitiesTableData = require('../../../api/entitiesTable');
var HeadersRow = require('./HeadersRow');
var ListRows = require('./ListRows');

var EntitiesTable = React.createClass({
  getInitialState: function() {
    return {records: EntitiesTableData};
  },
  sort: function(headerName, order) {
    var records = this.state.records.slice();
    if (order === "^") {
      records.sort(function(a, b) {
        return ((a[headerName] < b[headerName]) ? -1 : (a[headerName] > b[headerName] ? 1 : 0) );
      });
    }
    else {
       records.sort(function(a, b) {
        return ((a[headerName] > b[headerName]) ? -1 : (a[headerName] < b[headerName] ? 1 : 0) );
      });
    }
    this.setState({records: records});
  },

  //The order matters - note that addHeader and addComponent are singular but we can add
  //mutilple headers or components
  render: function() {
    var records = this.state.records;

    //CellWithCheckboxes are sharing the same key. caution!
    return (
    <table>
      <HeadersRow addHeader={["Include"]} 
                  entitiesTableData={records} 
                  onClick={this.sort}/>
      <ListRows entitiesTableData={records}/>
    </table>
    );
  }
});

 
module.exports = EntitiesTable;
