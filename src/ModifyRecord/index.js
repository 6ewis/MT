import React, { Component } from 'react';
//Components
import Form from './containers/stateOfForm.js';
//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';
import reducers from './reducers/index';
import { initialize } from './actions/index';
//Utility Libs
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

   render() {
     return (
       <Provider store={store}>
         <div className="container-fluid">
           <Col md={3} style={{position: 'fixed'}}>
           </Col>
           <Col md={6} mdOffset={3} style={{marginBottom: '1%'}}>
             <br/>
             <Form store={store}/>
           </Col>
           <Col md={3}></Col>
         </div>
       </Provider>
            );
  }
}
