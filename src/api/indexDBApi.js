//this file is not needed anymore
//"use strict";
//
//var _ = require('lodash');
//var Promise = require('es6-promise').Promise;
////var selectedEntitiesClone = selectedEntitiesClone || indexDBApi.copySelectedEntities();
//var selectedEntitiesClone;
//
//var indexDBApi = {
//  copySelectedEntities: function() {
//    var writableTable = window.db.selectedEntities;
//
//    var selectedEntitiesInArray = [];
//
//    var pushItemsOfWritableTableIntoArrayAsync = function() {
//      return new Promise(function(resolve, reject) {
//        resolve(
//         writableTable.each(function(item) {
//           selectedEntitiesInArray.push(item);
//         })
//        );
//      });
//    };
//
//   return pushItemsOfWritableTableIntoArrayAsync().then(
//    function() {
//      console.log(selectedEntitiesInArray);
//      return selectedEntitiesInArray;
//    }
//   );
//  },
//
//  getSelectedEntitiesClone: function() {
//   return selectedEntitiesClone;
//  },
//
//  setSelectedEntitiesClone: function(newEntities) {
//   selectedEntitiesClone = newEntities;
//  }
//};
//
//module.exports = indexDBApi;
