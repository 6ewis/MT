import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import SearchBar from './containers/searchBar';
import Sidebar from './containers/sidebar';
import ListOfEntities from './containers/listOfEntities';
import reducers from './reducers';

//should be defined outside the component - everytime SelectRecords re-renders it's recreating the store
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

class SelectRecords extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <div className="container-fluid">
          <div className="col-md-3">
             <Sidebar />
          </div>
          <div className="col-md-9">
            <br/>
            <SearchBar />
            <br/>
            <ListOfEntities />
          </div>
        </div>
      </Provider>

           );
  }
}

export default SelectRecords;
