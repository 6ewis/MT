import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxPromise from 'redux-promise';

import SearchBar from './containers/searchBar';
import Sidebar from './containers/sidebar';
import ListOfEntities from './containers/listOfEntities';
import reducers from './reducers';
import R from 'ramda';
import { Link } from 'react-router';

//should be defined outside the component - everytime SelectRecords re-renders it's recreating the store
const createStoreWithMiddleware = applyMiddleware(reduxPromise)(createStore);
const store = createStoreWithMiddleware(reducers);

class SelectRecords extends Component {
  renderNextButton() {
    let {selectedEntities} = store.getState();
    if (!R.isEmpty(selectedEntities)) {
      return <div style={{marginTop: '5%'}} className="col-md-5 col-md-offset-7">
               <Link to="/SelectDataForNewRecord"
                     state={{selectedEntities: selectedEntities}}
                     className='btn btn-default btn-lg btn-block'>
                     Next
               </Link>
             </div>;
    }
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
            {this.renderNextButton()}
          </div>
        </div>
      </Provider>
           );
  }
}

export default SelectRecords;
