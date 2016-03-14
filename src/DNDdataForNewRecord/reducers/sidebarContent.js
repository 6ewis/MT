import {INITIALIZE} from '../actions/index'; //use constants folder

export default function(state = {}, action) {
 switch (action.type) {
  case INITIALIZE:
    console.log("I'm in the reducer and the data during initialization is: ", action.payload);
    return action.payload;
 // case SELECT_ACCORDION:
 //   if (action.payload === "Names") {
 //     return state.map((a) =>
 //       {
 //        id: a.id ,
 //        entityType: a.entity_type,
 //        name: a.name,
 //        sort_name: a.sort_name
 //       });
 //   } else if {action.payload === "Dates"} {
 //     return state.map((a) =>
 //       {
 //        id: a.id ,
 //        birthDate: a.birth_date,
 //        deathDate: a.death_date
 //       });
 //   }
  }
 return state;
}
