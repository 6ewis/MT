import React, { Component } from 'react';
//Components
import StateOfPreview from './containers/stateOfPreview';
//Redux
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers/index';
import { initialize } from './actions/index';
//Utility Libs
import {Col} from 'react-bootstrap';
//Transition Buttons
import {BackButton, NextButton, CancelButton} from '../shared/transitionButtons/index.js';

//Enable Chrome Redux Plugin
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
);

//should be defined outside the component - everytime it re-renders it's recreating the store
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers, {}, enhancers);

export default class PreviewOfProposedMerge extends Component {
   constructor(props) {
     super(props);
     //initialize data from previous page
     store.dispatch(initialize(props.location.state));
   }

   /* have not set up the logic for the transition buttons yet */
   renderNextButton() {
     let {updatedFormContent} = store.getState();
     return (
       <NextButton
         url=""
         state={{store: store}}
       />
     );
   }

   renderTransitionsButtons() {
    return (
     <Col md={12}>
       <Col md={3}>
         <BackButton url="/SelectRecordsToMerge"/>
       </Col>
       <Col md={3}>
         {this.renderNextButton()}
       </Col>
       <Col md={3}>
         <CancelButton />
       </Col>
       <Col md={3}>
       </Col>
     </Col>
   );
   }

   render() {
          return (
       <Provider store={store}>
         <div className="container-fluid">
           <Col md={8} mdOffset={2} style={{marginBottom: '1%'}}>
             <br/>
              <StateOfPreview/>
              {this.renderTransitionsButtons()}
           </Col>
         </div>
       </Provider>
            );
  }
}
