import React from 'react';

export default ({styleHeader, styleIconLabel, content}) => {
   function renderBirthDates() {
     let birthDates = content.map(({birthDate, id}, index) => {
         return (
             <div key={index}>
               {`${birthDate} (CP: ${id})`}
             </div>
         );
     });

     return (
       <div>
          <h4 style={styleHeader}> Birth Dates </h4>
          {birthDates}
       </div>
     );
   }

 return renderBirthDates();
};
