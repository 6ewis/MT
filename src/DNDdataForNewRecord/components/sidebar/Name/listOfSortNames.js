import React from 'react';
import SortName from './sortName';
import _BoxSource from '../../../containers/DND/_BoxSource';

export default ({styleHeader, content}) => {
   function renderSortNames() {
     let sortNames = content.map(({sortName, id}, index) => {
       let newProps = Object.assign({}, {}, {_valueSource: sortName, sortName: sortName, id: id, key: index});
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
