import React from 'react';
import EntityType from '../Name/entityType.js';
import _BoxSource from '../../../containers/DND/_BoxSource';

export default (props) => {

  let {styleHeader, content } = props;

  function getUniqueEntityTypes() {
   let entitiesTypes = content.map( function(item) {
      return item.entityType;
     });

     return new Set(entitiesTypes);
  }

  function renderEntityTypes() {
    let uniqEntityTypes = Array.from(getUniqueEntityTypes()).map((entityType, index) => {
      let draggedItem = {attribute: 'entityType', value: entityType};
      let newProps = Object.assign({}, props, {_draggedItem: draggedItem, entityType: entityType, key: index});
      return React.createElement(_BoxSource('Entity Types', EntityType), newProps);
    });

   return (
     <div>
       <h4 style={styleHeader}>Entity Types</h4>
       {uniqEntityTypes}
     </div>
   );
  }

 return renderEntityTypes();
};
