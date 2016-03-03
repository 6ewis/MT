export const FETCH_ENTITIES = 'FETCH_ENTITIES';
export const SELECT_ENTITY = 'SELECT_ENTITY';
export const REMOVE_ENTITY = 'REMOVE_ENTITY';

export function fetchEntities(term = "") {
  function queryString(item) {
   console.log("the event is:", item);
   if (term.length > 0) {
     console.log("the query string is :", item);
     return "query_string=" + item;
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

export function selectEntity(selectedEntity) {
  return {
    type: SELECT_ENTITY,
    payload: selectedEntity
  };
}

export function removeEntity(entity) {
  return {
    type: REMOVE_ENTITY,
    payload: entity
  };
}
