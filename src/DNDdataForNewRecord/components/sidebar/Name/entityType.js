import React from 'react';
//styleIconLabel should be in this component
export default ( {backgroundColor,
                  styleIconLabel, styleCursor,
                  opacity, connectDragSource, entityType}
               ) => {
  let classEntityTypes = {
    'Individual': 'fa fa-user fa-3x',
    'Company': 'fa fa-building-o fa-3x'
   };

  let cursor = styleCursor.cursor;

  return connectDragSource(
     <div className='hover' style={{opacity, backgroundColor, cursor}}>
            <i className={classEntityTypes[entityType]}>
            </i>
            <div style={styleIconLabel}>
              { entityType }
            </div>
      </div>
  );
};
