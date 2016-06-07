import React, { Component } from 'react';
//Components
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

   renderNextButton() {
     let {updatedFormContent} = store.getState();
     return (
       <NextButton
         url="/ModifyRecord"
         state={{store: store}}
       />
     );
   }

   renderTansitionsButtons() {
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
     return (
       <Provider store={store}>
         <div className="container-fluid">
           <div className="col-md-3" style={{position: 'fixed'}}>
           </div>
           <div className="col-md-6 col-md-offset-3" style={{marginBottom: '1%'}}>
             <br/>
              <h1>
                We started from the bottom now were here
              </h1>
                {JSON.stringify(this.props.location.state.store.getState().updatedFormContent)}
           </div>
           <div className="col-md-3"></div>
         </div>
       </Provider>
            );
  }
}
