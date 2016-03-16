export const SELECT_ACCORDION = 'SELECT_ACCORDION';
export const INITIALIZE = 'INITIALIZE';
//
  //data ajax req to serve return with minimun possible data for the sidebar
  //data coming from reducers depending on the accordion
  //sidebarWithNamesContent
  let first_entity = {
    id: "1231",
    entityType: "Individual",
    name: "John Smith",
    sortName: "JOHN SMITH",
    birthDate: "23/21/10",
    deathDate: "00/03/33"
  };
  
  let second_entity = {
    id: "123331",
    entityType: "Company",
    name: "John T. Smith",
    sortName: "SMITH T JOHN",
    birthDate: "25/21/10",
    deathDate: "01/03/33"

  };

  let content = {entities: [first_entity, second_entity]};

export function selectAccordion(selectedAccordion) {
  return {
    type: SELECT_ACCORDION,
    payload: selectedAccordion
  };
}

export function initialize() {
  return {
    type: INITIALIZE,
    payload: content.entities
  };
}
