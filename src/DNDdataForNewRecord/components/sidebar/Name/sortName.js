import React from 'react';

export default ({index, sortName, id, connectDragSource,
                 opacity, backgroundColor, cursor}) => {
  return connectDragSource(
    <div className='hover' style={{opacity, backgroundColor, cursor}}>
      {sortName ? `${sortName} (CP: ${id})` : ''}
    </div>
  );
};
