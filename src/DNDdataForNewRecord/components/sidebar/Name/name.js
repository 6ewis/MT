import React from 'react';

export default ({index, name, id, connectDragSource,
                 opacity, backgroundColor, cursor}) => {
  return connectDragSource(
    <div className='hover' style={{opacity, backgroundColor, cursor}}>
      {name ? `${name} (CP: ${id})` : ''}
    </div>
  );
};

