import React, { Component } from 'react';
//Components
import Form from './containers/stateOfForm.js';
//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers/index';
import { initialize } from './actions/index';
//Transition Buttons
import {BackButton, NextButton, CancelButton} from '../shared/transitionButtons/index.js';
import {Col} from 'react-bootstrap';

//should be defined outside the component - everytime it re-renders it's recreating the store
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

export default class ModifyRecord extends Component {
   constructor(props) {
     super(props);
     //initialize data from previous page
     store.dispatch(initialize(props.location.state));
   }

   style() {
     return {paddingLeft: '0px', paddingRight: '0px'}
   }
   renderTansitionsButtons() {
    return (
     <Col md={12}>
       <Col md={3}>
       </Col>
       <Col md={3} style={this.style()}>
         <BackButton url="/SelectRecordsToMerge"/>
       </Col>
       <Col md={3}>
         <NextButton url="/PreviewOfProposedMerge" state={{store: store}} />
       </Col>
       <Col md={3}>
         <CancelButton />
       </Col>
     </Col>
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
             <Form />
             {this.renderTansitionsButtons()}
           </div>
           <div className="col-md-3"></div>
         </div>
       </Provider>
            );
  }
}
