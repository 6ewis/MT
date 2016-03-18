import React from 'react';
import Name from './name';
import _BoxSource from '../../../containers/DND/_BoxSource';

export default ({styleHeader, content, styleCursor}) => {
   function renderNames() {
     let names = content.map(({name, id}, index) => {
       let draggedItem = {attribute: 'name', value: name, id: id};
       let newProps = Object.assign({}, {}, {_draggedItem: draggedItem, name: name, id: id, key: index, cursor: styleCursor.cursor});
         return React.createElement(_BoxSource('Name', Name), newProps);
     });

     return (
       <div>
          <h4 style={styleHeader}> Names </h4>
          {names}
       </div>
     );
   }

 return renderNames();
};
