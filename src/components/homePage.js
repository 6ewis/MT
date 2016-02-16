'use strict';

var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var HomePage = React.createClass({

  render: function() {
    return ( <div>
                <Link to="/SelectRecordsToMerge"> SelectRecordsToMerge </Link>
                <Link to="/SelectDataForNewRecord"> SelectDataForNewRecord </Link>
                <Link to="/ReviewAndModifyRecordDetails"> ReviewAndModifyRecordDetails </Link>
             </div>
          );
  }});

module.exports = HomePage;
