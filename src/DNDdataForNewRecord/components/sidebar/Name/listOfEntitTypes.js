import React from 'react';
import EntityType from '../Name/entityType.js';
import Source from '../../../containers/DND/source';

export default (props) => {

  let {styleHeader, styleIconLabel, content } = props;

  function getUniqueEntityTypes() {
   let entitiesTypes = content.map( function(item) {
      return item.entity_type;
     });

     return new Set(entitiesTypes);
  }

  function renderEntityTypes() {
    let uniqEntityTypes = Array.from(getUniqueEntityTypes()).map((entityType, index) => {
      return (<Source entityType={entityType}
                          key={index} {...props} />
             );
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
