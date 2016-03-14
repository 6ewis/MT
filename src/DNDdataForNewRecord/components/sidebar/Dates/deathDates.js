import React from 'react';

export default ({styleHeader, styleIconLabel, content}) => {
   function renderDeathDates() {
     let deathDates = content.map(({deathDate, id}, index) => {
         return (
             <div key={index}>
               {`${deathDate} (CP: ${id})`}
             </div>
         );
     });

     return (
       <div>
          <h4 style={styleHeader}> Death Dates </h4>
          {deathDates}
       </div>
     );
   }

 return renderDeathDates();
};
