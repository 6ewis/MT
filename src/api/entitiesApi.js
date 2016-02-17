
"use strict";

//This file is mocking a web API by hitting hard coded data.
//var Entities = require('./rawDataFromServer.js').entities;
var Entities = [];
var _ = require('lodash');

function findCorrespondingIdThenReturnField(ID, field) {
  return _.result(_.find(Entities, {'cpref': ID}), field);
}

function queryString(event) {
 if (event.length > 0) {
   return "query_string=" + event;

 }
 return "";
}

var EntitiesApi = {
 fetchData: function(event) {
   return $.ajax({
     url: "http://api.lvh.me:3000/search?" + queryString(event),
     dataType: 'json',
     success: function(data) {
       console.log("the request to the backend server was made successfully", data.fact_table);
       Entities = data.fact_table;
       return data.fact_table;
     },
     error: function(data) {
       console.log("An error occured whil making a request to the backend");
       return data;
     }
   });
 },
 getTableData: function () {
    return _.map(Entities, function(item) { return {'Name': item.name,
              'CPREF': item.cpref,
              'Registered Address': item.registered_address,
              'Entity Type': item.entity_type,
              'Open Matters': item.open_matters,
              'Closed Matters': item.closed_matters
             };
    });
  },
 getSidebar: function() {
    let me = this;
    let selectedEntitiesArray;
    return window.db.selectedEntities.toArray(function(array) {
     return _.map(array, function(item) {
     let cpref = item.CPREF;
      return {
        'name': item.Name,
        'CPREF': cpref,
        'sortName': findCorrespondingIdThenReturnField(cpref, 'sort_name'),
        'dateOfBirth': findCorrespondingIdThenReturnField(cpref, 'date_of_birth'),
        'dateDeceased': findCorrespondingIdThenReturnField(cpref, 'date_deceased'),
        'nationality': findCorrespondingIdThenReturnField(cpref, 'nationality'),
        'residence': findCorrespondingIdThenReturnField(cpref, 'residence'),
        'domicile': findCorrespondingIdThenReturnField(cpref, 'domicile'),
        'city': findCorrespondingIdThenReturnField(cpref, 'city'),
        'province': findCorrespondingIdThenReturnField(cpref, 'province'),
        'zipCode': findCorrespondingIdThenReturnField(cpref, 'zip_code'),
        'country': findCorrespondingIdThenReturnField(cpref, 'country'),
        'phone': findCorrespondingIdThenReturnField(cpref, 'phone'),
        'fax': findCorrespondingIdThenReturnField(cpref, 'fax'),
        'entityType': findCorrespondingIdThenReturnField(cpref, 'entity_type'),
        'positions': findCorrespondingIdThenReturnField(cpref, 'positions')
      };
      });
    });
 } };

export default EntitiesApi;
