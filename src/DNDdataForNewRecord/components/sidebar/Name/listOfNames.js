import React from 'react';
import Name from './name';
import _BoxSource from '../../../containers/DND/_BoxSource';

export default ({styleHeader, content}) => {
   function renderNames() {
     let names = content.map(({name, id}, index) => {
       let newProps = Object.assign({}, {}, {_valueSource: name, name: name, id: id, key: index});
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
