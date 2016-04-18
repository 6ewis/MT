import React from 'react';

export default ( {backgroundColor, cursor, opacity, connectDragSource, attributeValue}
               ) => {

  const classEntityTypes = {
    'Individual': 'fa fa-user fa-3x',
    'Company': 'fa fa-building-o fa-3x'
   };

  const styleIconLabel = {
    marginBottom: '5%'
  };

  const paddingTop = '2%';
  const paddingBottom = '1%';

  return connectDragSource(
     <div style={{opacity, backgroundColor, cursor, paddingTop, paddingBottom}} 
          className='DNDhover'>
            <i className={classEntityTypes[attributeValue]}>
            </i>
            <div style={styleIconLabel}>
              { attributeValue }
            </div>
      </div>
  );
};
