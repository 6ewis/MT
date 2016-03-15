import React from 'react';
//styleIconLabel should be in this component
export default ( {backgroundColor, index, styleIconLabel, opacity, connectDragSource, entityType}) => {
  let classEntityTypes = {
    'Individual': 'fa fa-user fa-3x',
    'Company': 'fa fa-building-o fa-3x'
   };

  return connectDragSource(
     <div style={{opacity, backgroundColor}} key={index}>
            <i className={classEntityTypes[entityType]}>
            </i>
            <div style={styleIconLabel}>
              { entityType }
            </div>
      </div>
  );
};
