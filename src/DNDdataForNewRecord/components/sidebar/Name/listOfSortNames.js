import React from 'react';
import SortName from './sortName';
import _BoxSource from '../../../containers/DND/_BoxSource';

export default ({styleHeader, content, styleCursor}) => {
   function renderSortNames() {
     let sortNames = content.map(({sortName, id}, index) => {
       let draggedItem = {attribute: 'sortName', value: sortName, id: id};
       let newProps = Object.assign({}, {}, {_draggedItem: draggedItem, sortName: sortName, id: id, key: index, cursor: styleCursor.cursor});
         return React.createElement(_BoxSource('Sort Name', SortName), newProps);
     });

     return (
       <div>
          <h4 style={styleHeader}> Sort Names </h4>
          {sortNames}
       </div>
     );
   }

 return renderSortNames();
};
