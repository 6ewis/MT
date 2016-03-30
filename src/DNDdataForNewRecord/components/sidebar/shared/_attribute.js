import React from 'react';

export default ({attributeValue, id, connectDragSource,
                 opacity, backgroundColor, cursor}) => {
  return connectDragSource(
    <div className='DNDhover' style={{opacity, backgroundColor, cursor}}>
      {attributeValue ? `${attributeValue} (CP: ${id})` : ''}
    </div>
  );
};

