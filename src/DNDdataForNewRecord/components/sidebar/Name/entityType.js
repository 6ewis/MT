import React from 'react';

export default ( {backgroundColor,
                  styleIconLabel, styleCursor,
                  opacity, connectDragSource, entityType}
               ) => {

  let classEntityTypes = {
    'Individual': 'fa fa-user fa-3x',
    'Company': 'fa fa-building-o fa-3x'
   };

  let cursor = styleCursor.cursor;
  let paddingTop = '2%';
  let paddingBottom = '1%';
  return connectDragSource(
     <div style={{opacity, backgroundColor, cursor, paddingTop, paddingBottom}} 
          className='DNDhover'>
            <i className={classEntityTypes[entityType]}>
            </i>
            <div style={styleIconLabel}>
              { entityType }
            </div>
      </div>
  );
};
