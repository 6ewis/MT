import React, { Component } from 'react';
//Components
import Preview from './components/preview.js';
//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers/index';
import { initialize } from './actions/index';
//Transition Buttons
import {BackButton, NextButton, CancelButton} from '../shared/transitionButtons/index.js';


//should be defined outside the component - everytime it re-renders it's recreating the store
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

export default class PreviewOfProposedMerge extends Component {
   constructor(props) {
     super(props);
     //initialize data from previous page
     //store.dispatch(initialize(props.location.state));
   }

   /* have not set up the logic for the transition buttons yet */
   renderNextButton() {
     let {updatedFormContent} = store.getState();
     return (
       <NextButton
         url="/ModifyRecord"
         state={{store: store}}
       />
     );
   }

   renderTransitionsButtons() {
    return (
     <div>
       <div className="col-md-3 col-md-offset-3">
         <BackButton url="/SelectRecordsToMerge"/>
       </div>
       <div className="col-md-3">
         {this.renderNextButton()}
       </div>
       <div className="col-md-3">
         <CancelButton />
       </div>
     </div>
   );
   }

   render() {
     const updatedFormContent =
       this.props.location.state.store.getState().updatedFormContent;
     return (
       <Provider store={store}>
         <div className="container-fluid">
           <div className="col-md-8 col-md-offset-2" style={{marginBottom: '1%'}}>
             <br/>
              <Preview updatedFormContent={updatedFormContent}/>
              {/*<Preview updatedFormContent=
                {this.props.location.state.store.getState().updatedFormContent}/>
              */}
              {this.renderTransitionsButtons()}
           </div>
           <div className="col-md-2"></div>
         </div>
       </Provider>
            );
  }
}
