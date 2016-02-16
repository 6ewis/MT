/*
 * action types
 */


/*
 * action creators
 */
export function loadData(data) {
  console.log("im in the actions: " + data);
  return {type: 'LOAD_DATA',
          data: data};
}

//mispelled - fix it
export function setSiderBar(sidebarComponent) {
  console.log("I'm in the actions setSiderBar", sidebarComponent);
  console.log('im in the actions redux');
  return {type: 'SET_SIDEBAR',
          sidebarComponent: sidebarComponent};
}

export function dropElement(attribute, cpref, content, sidebarComponent) {
  console.log("content is" + content);
  return {type: 'DROP_ATTRIBUTE',
          attribute: attribute,
          cpref: cpref,
          content: content,
          sidebarComponent: sidebarComponent};
}

export function reset(attribute, cpref, sidebarComponent) {
  console.log("I'm in actions.js: " + attribute, cpref, sidebarComponent);
  return {type: 'RESET',
          attribute: attribute,
          cpref: cpref,
          sidebarComponent: sidebarComponent};
}
