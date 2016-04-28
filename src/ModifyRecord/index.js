import React, { Component } from 'react';
//Components
import Form from './containers/stateOfForm.js';
//add help sidebar
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

export default class ModifyRecord extends Component {
   constructor(props) {
     super(props);
     store.dispatch(initialize(props.location.state));
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
           </div>
           <div className="col-md-3"></div>
         </div>
       </Provider>
            );
  }
}
