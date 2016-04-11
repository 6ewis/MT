import serializeData from '../config/serializeData';

export const SELECT_ACCORDION = 'SELECT_ACCORDION';
export const INITIALIZE = 'INITIALIZE';
export const DROP_ITEM = 'DROP_ITEM';
export const CLICK_X = 'CLICK_X';

//Test data for development
  let first_entity = {
    id: "1231",
    entity_type: "I", //real data use I for 'Individual' and 'C' for Company
    name: "John Smith",
    sort_name: "JOHN SMITH",
    birth_date: "23/21/10",
    death_date: "00/03/33",
    domicile: "British Virgin Islands",
    residence: "British Virgin Islands",
    nationality: "Italian",
    phone: "1-988-123-1234",
    fax: "716-234-530", 
    city: "Burlington", 
    province: "New Jersey", 
    zip_code: "08016", 
    country: "USA" };
  
  let second_entity = {
    id: "123331",
    entity_type: "C",
    name: "John T. Smith",
    sort_name: "SMITH T JOHN",
    birth_date: "25/21/10",
    death_date: "01/03/33",
    domicile: "Mexico",
    residence: "England",
    nationality: "South African",
    phone: "1-788-443-5534",
    fax: "812-333-430",
    city: "Hamptons",
    province: "New York",
    zip_code: "10791",
    country: "USA"
  };

  let content = {entities: [first_entity, second_entity]};

export function selectAccordion(selectedAccordion) {
  return {
    type: SELECT_ACCORDION,
    payload: selectedAccordion
  };
}

export function clickX(selectedItem) {
  console.log('Im in the action', selectedItem);
  return {
    type: CLICK_X,
    payload: selectedItem
  };
}

export function dropItem(item) {
  return {
    type: DROP_ITEM,
    payload: item
  };
}

export function initialize(initialData) {
  return {
    type: INITIALIZE,
  //  payload: serializeData(initialData.selectedEntities)
    payload: serializeData(content.entities)
  };
}
