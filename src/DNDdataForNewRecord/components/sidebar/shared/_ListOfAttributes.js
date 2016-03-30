import React from 'react';
import _BoxSource from '../../../containers/DND/_BoxSource';

export default ( {
   styleHeader, content, styleCursor, attributeName,
   attributeTitle, boxSourceType, boxSourceComponent
  }) => {

   function renderAttributes() {
     let listAttribute = content.map((key, index) => {
       let draggedItem = {attribute: attributeName, value: key[attributeName], id: key.id};
       let newProps = Object.assign({}, {}, {
         _draggedItem: draggedItem,
         attributeValue: key[attributeName],
         id: key.id,
         key: index,
         cursor: styleCursor.cursor});
         return React.createElement(_BoxSource(boxSourceType, boxSourceComponent), newProps);
     });

     return (
       <div>
          <h4 style={styleHeader}> {attributeTitle} </h4>
          {listAttribute}
       </div>
     );
   }

 return renderAttributes();
};
