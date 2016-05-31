'use strict';
/* REFACTOR THIS FILE  */
window.$ = window.jQuery = require('jquery'); //investigate where jQuery is being used and refactor
window.Dexie = require('dexie'); //dexie has a dependency on jQuery
window.db = new window.Dexie('my-database'); //This is pretty much the indexDB

// define the database
window.db.version(1).stores({
 //we select entities before merging
 selectedEntities: '++id, Name,CPREF,registeredAddress,entityType,openMatters,closedMatters'
});

//
// Open it
//
window.db.open();

var React = require('react');
var Router = require('react-router').Router;
var routes = require('./routes');
var ReactDOM = require('react-dom');

var createHistory = require('history/lib/createBrowserHistory');
// Opt-out of persistent state, not recommended.
var history = createHistory({
  queryKey: false
});


ReactDOM.render(<Router routes={routes} history={history}/>,
                document.getElementById('root'));
