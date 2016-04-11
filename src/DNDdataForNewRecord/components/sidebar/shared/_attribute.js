import React from 'react';
import R from 'ramda';

export default ({attributeValue, id, connectDragSource,
                 opacity, backgroundColor, cursor}) => {
  return connectDragSource(
    <div className='DNDhover' style={{opacity, backgroundColor, cursor}}>
      {!R.isNil(attributeValue) ? `${attributeValue}` : ''}
    </div>
  );
};

