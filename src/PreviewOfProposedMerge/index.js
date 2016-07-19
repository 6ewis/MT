import React, { Component } from 'react';
//Components
import StateOfPreview from './containers/stateOfPreview';
import ModalClass from './components/smart/modal';
//Redux
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers/index';
import { initialize } from './actions/index';
//Utility Libs
import {Col, Button} from 'react-bootstrap';
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
     return (
       <Button bsSize="large">
         <i className="fa fa-check-square-o" aria-hidden="true"></i>
          &nbsp; Next Step &nbsp; &nbsp;
       </Button>
     );
   }

   renderTransitionsButtons() {
    return (
     <Col md={12}>
       <Col md={3}>
         <BackButton url="/SelectRecordsToMerge" icon="fa fa-pencil"/>
       </Col>
       <Col md={1}>
       </Col>
       <Col md={3}>
         <ModalClass store={store}>
           {this.renderNextButton()}
         </ModalClass>
       </Col>
       <Col md={1}>
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
