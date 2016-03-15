import React from 'react';

export default ({styleHeader, styleIconLabel, content}) => {
   function renderNames() {
     let names = content.map(({name, id}, index) => {
         return (
             <div key={index}>
               {`${name} (CP: ${id})`}
             </div>
         );
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
