import React, { Component } from 'react';
//Containers
import SearchBar from './containers/searchBar';
import Sidebar from './containers/sidebar';
import ListOfEntities from './containers/listOfEntities';
//Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import reduxPromise from 'redux-promise';
//Utility libs
import R from 'ramda';
//Transition Buttons
import {NextButton} from '../shared/transitionButtons/index';

//It is defined outside the component - otherwise everytime SelectRecords re-renders it's recreating the store
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

class SelectRecords extends Component {
  renderNextButton() {
    let {selectedEntities} = store.getState(); //Refactor-we should pass the store instead- it's safer not to rely on the unusual rerendering of the component
    if (!R.isEmpty(selectedEntities)) {
      return <div style={{marginTop: '5%'}} className="col-md-5 col-md-offset-7">
               <NextButton
                 url="/SelectDataForNewRecord"
                 state={{selectedEntities: selectedEntities}}
               />
             </div>;
    }
  }

  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <div className="col-md-3">
             <Sidebar /> {/* I suspect the animation that uses jquery and changes the DOM forces the component to re-render*/}
          </div>
          <div className="col-md-9">
            <br/>
            <SearchBar />
            <br/>
            <ListOfEntities />
            {this.renderNextButton()}
          </div>
        </div>
      </Provider>
           );
  }
}

export default SelectRecords;
