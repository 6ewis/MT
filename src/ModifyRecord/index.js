import React, { Component } from 'react';
//Components
import Form from './components/form.js';
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
   render() {
     store.dispatch(initialize(this.props.location.state));

     return (
       <Provider store={store}>
         <div className="container-fluid">
           <div className="col-md-3" style={{position: 'fixed'}}>
           </div>
           <div className="col-md-9 col-md-offset-3" style={{marginBottom: '1%'}}>
             <br/>
             <Form />
           </div>
         </div>
       </Provider>
            );
  }
}