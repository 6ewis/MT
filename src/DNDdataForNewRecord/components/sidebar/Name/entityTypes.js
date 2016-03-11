import React from 'react';

export default ({styleHeader, styleIconLabel, content}) => {

 let classEntityTypes = {
   'Individual': 'fa fa-user fa-3x',
   'Company': 'fa fa-building-o fa-3x'
  };

  function getUniqueEntityTypes() {
    let entitiesTypes = content.map( function(item) {
      return item.entity_type;
     });

     return new Set(entitiesTypes);
  }

  function renderEntityTypes() {
    let uniqEntityTypes = Array.from(getUniqueEntityTypes()).map((entityType, index) => {
      return (<div key={index}>
               <i className={classEntityTypes[entityType]}>
               </i>
               <div style={styleIconLabel}> { entityType } </div>
               </div>
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
