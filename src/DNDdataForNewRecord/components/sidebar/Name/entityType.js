import React from 'react';
//styleIconLabel should be in this component
export default ( {backgroundColor,
                  styleIconLabel, styleCursor,
                  opacity, connectDragSource, entityType}
               ) => {
  let classEntityTypes = {
    'I': 'fa fa-user fa-3x',
    'C': 'fa fa-building-o fa-3x'
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
