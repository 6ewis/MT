import React from 'react';

export default ({styleHeader, styleIconLabel, content}) => {
  function renderSortNames() {
       let sortNames = content.map(({sort_name, id}, index) => {
           return (
               <div key={index}>
                 {`${sort_name} (CP: ${id})`}
               </div>
           );
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
