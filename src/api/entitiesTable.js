//this file is not needed anymore
'use strict';

var _ = require('lodash');
var EntitiesApi = require('./entitiesApi');

console.log(EntitiesApi);
var EntitiesTableData = EntitiesApi.getTableData();
module.exports = EntitiesTableData;
//module.exports = [{
//  "Name": "John Smith",
//  "CP REF": "189381",
//  "Registered Address": "AS Coopers Building 26 Reid Street Hamilton HM 11 Bermuda",
//  "Entity Type": "Individual",
//  "Open Matters": "21",
//  "Closed Matters": "5",
//  "Sort Name": "SMITH JOHN"
//},
//{
//  "Name": "John Smith",
//  "CP REF": "12831",
//  "Registered Address": "26 Reid Street Hamilton HM 11 Bermuda",
//  "Entity Type": "Individual",
//  "Open Matters": "21",
//  "Closed Matters": "5",
//  "Sort Name": "SMITH JOHN"
//}, {
//  "Name": "John T. Smith",
//  "CP REF": "1242",
//  "Registered Address": "AS Coopers BUilding 26 Reid Street Hamilton HM 11 Bermuda",
//  "Entity Type": "Individual",
//  "Open Matters": "7",
//  "Closed Matters": "0",
//  "Sort Name": "SMITH T. JOHN"
//}, {
//  "Name": "John Smithers",
//  "CP REF": "1231",
//  "Registered Address": "181 University Ave Toronto Ontario Canada",
//  "Entity Type": "Individual",
//  "Open Matters": "0",
//  "Closed Matters": "0",
//  "Sort Name": "SMITHERS JOHN"
//}, {
//  "Name": "John SMithy Ltd",
//  "CP REF": "102",
//  "Registered Address": "New York United States",
//  "Entity Type": "Company",
//  "Open Matters": "0",
//  "Closed Matters": "12",
//  "Sort Name": "SMITHTY JOHN"
//}];
