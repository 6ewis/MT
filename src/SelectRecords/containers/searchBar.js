import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEntities } from '../actions/index';

import _ from 'lodash';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {term: ''};
    this.onInputChangeDebounced = _.debounce(() => {
      this.props.fetchEntities(this.state.term);
    }, 300);
  }

  onInputChange(term) {
   console.log("here is the term I'm searching for: ", term);
   this.setState({term});
   this.onInputChangeDebounced();
   // this.setState({term: ''});
  }

  render() {

    return (
      <div className="input-group col-md-12 input-group-lg" style={{marginLeft: '10px'}}>
         <input
          type="text"
          className="form-control"
          placeholder="Search Entity..."
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}
        />
        <span className="input-group-addon">
          <i className="fa fa-search">
          </i>
        </span>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchEntities}, dispatch);
}



export default connect(null, mapDispatchToProps)(SearchBar);
