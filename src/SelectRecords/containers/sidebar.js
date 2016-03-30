import React, { Component } from 'react';
import CurrentlySelectedEntities from './currentlySelectedEntities';

export default (props) => {
   let myFlipContainer;
   return (
     <div>
       <br/>
       <br/>
       <div className="flip-container" id="flip-toggle" ref={(ref) => myFlipContainer = ref}>
         <div className="flipper">
           <div className="back">
               <div className="list-group">
                 <CurrentlySelectedEntities />
               </div>

               <i className="fa fa-question-circle fa-2"
                  onClick={() => myFlipContainer.classList.toggle('hover')}>
               </i>
           </div>
           <div className="front">
             <div className="well well-lg">
               <h4><strong><center>INSTRUCTIONS</center></strong></h4>
               <ol>
                 <li><h5> Use the search bar to look for the entities that match a specific term</h5></li>
                 <li><h5> Select the entities that might be duplicates </h5>
                      <h6>This sidebar will be populated with the items you select</h6>
                      <ul>
                       <li><h6>Click the X mark to deselect an item</h6></li>
                      </ul>
                 </li>
                 <li><h5> Clik Next to continue the process</h5></li>
               </ol>
               <br/>
               <i className="fa fa-remove fa-2"
                  onClick={() => myFlipContainer.classList.toggle('hover')}
               >
               </i>
             </div>
           </div>
         </div>
       </div>
     </div>
        );
};
