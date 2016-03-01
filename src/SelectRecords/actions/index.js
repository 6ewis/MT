var EntitiesApi = require('../../api/entitiesApi');

export const FETCH_ENTITIES = 'FETCH_ENTITIES';

export function fetchEntities(term = "") {
  function queryString(term) {
   console.log("the event is:", term);
   if (term.length > 0) {
     console.log("the query string is :", term);
     return "query_string=" + term;
   }
   return "";
  }

  const request = $.ajax({
    url: "http://api.lvh.me:3000/search?" + queryString(term),
    dataType: 'json'
  });

  console.log('Request:', request);

  return {
    type: FETCH_ENTITIES,
    payload: request
  };
}
