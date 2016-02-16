'use strict';

var React = require('react');
var SortableHeader = require('./SortableHeader');

var HeadersRow = React.createClass({
  getInitialState: function() {
    return {defaultColumnDirection: "",
            headerClickedOn: null
    };
  },
  iveBeenClickedOn: function(headerName, direction) {
    this.setState({headerClickedOn: headerName});
    this.props.onClick(headerName, direction);
  },
  //the props addHeader should be an array of strings - use it to add headers
  render: function () {
    var that = this;
    var headers = Object.keys(that.props.entitiesTableData[0]).concat(that.props.addHeader);
    
    function formatHeader(headerName, index, array) {
        //rename it the properties
      return (<SortableHeader key={index} 
               headerName={headerName}
               headerClickedOn = {that.state.headerClickedOn}
               onClick={that.iveBeenClickedOn}/>);  
    }
    
    return (
      <thead>
        <tr>
          {headers.map(formatHeader)}
        </tr>
      </thead>
      );
  }
});

module.exports = HeadersRow;
