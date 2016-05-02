import React from 'react';
import R from 'ramda';

export default ({attributeValue, id, connectDragSource,
                 opacity, backgroundColor, cursor}) => {
  function renderAttributeValue() {
    //take into account new line character
    return attributeValue.split('\\n')
      .map((item, index) => <span key={index}>{item}<br/></span>);
  }

  return connectDragSource(
    <div className='DNDhover' style={{opacity, backgroundColor, cursor}}>
      {R.either(R.isNil, x => R.isEmpty(R.trim(x)))(attributeValue) ?
         null :
         renderAttributeValue()
      }
    </div>
  );
};
