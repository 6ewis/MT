import { combineReducers } from 'redux';
import EntitiesApi from '../api/entitiesApi.js';
import _ from 'lodash';


/***************************************************************
*THE REDUCERS BELOW ARE RELEVANT TO /SelectDataForNewRecord.js *
***************************************************************/
let initialState = [];
let reviewContentState = {};

function sidebar(state = [], action) {
  switch (action.type) {
   case 'SET_SIDEBAR':
    return action.sidebarComponent;
   case 'DROP_ATTRIBUTE':
    return action.sidebarComponent;
   case 'RESET':
    return action.sidebarComponent;
  default:
    return 'Name';
  }
}

function findCorrespondingIdThenReturnField(ID, field) {
  return _.result(_.find(initialState, {'CPREF': ID}), field);
}

function sidebarContent(state = [], action ) {
  switch (action.type) {
   case 'LOAD_DATA':
     initialState = action.data;
     return action.data;
   case 'DROP_ATTRIBUTE': 
    return state.map((item) =>
      {
        if (item.CPREF === action.cpref) { //apply to all attributes but irrelevant for entityType 
          reviewContentState[action.attribute] = item[action.attribute]; //only relevant for the 
          //review page - smart way to pass data to the next page but not clean
          return {...item, [action.attribute]: null};
        } else if (item.entityType === action.content) {
          //not using || to make it clear that the condition above is irrelevant to entityType
          //and this condition only apply to EntityTypes
           reviewContentState[action.attribute] = action.content; //only relevant for the review page
          return {...item, [action.attribute]: null};
        }
          return item;
      });
   case 'RESET':
    return state.map((item) =>
      {
        if (item.CPREF === action.cpref) { 
          //apply to all attributes but irrelevant for entityType 
          let originalAttribute = findCorrespondingIdThenReturnField(action.cpref, action.attribute);
          return {...item, [action.attribute]: originalAttribute};
        } else if (action.attribute === "entityType") {
          let originalEntityType = findCorrespondingIdThenReturnField(item.CPREF, action.attribute);
          return {...item, [action.attribute]: originalEntityType};
        }
          return item;
      });

   default:
      return state;
  }
}

/***************************************************************
*THE REDUCERS BELOW ARE RELEVANT TO /ReviewAndModifyRecordDetails.js *
***************************************************************/

function reviewContent(state=[], action){
 // console.log("I'm in the reducer function and the content is: " + reviewContentState);
  return reviewContentState;
}

const combinedReducers = combineReducers({
 sidebar,
 sidebarContent,
 reviewContent
});

export default combinedReducers;
