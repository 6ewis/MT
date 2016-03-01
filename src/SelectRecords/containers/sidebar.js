import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-2">
        <br/>
        <br/>
        <div className="jumbotron" style={{padding: '5px'}}>
          <div className="list-group">
            <a href="#" className="list-group-item list-group-item-success">
              <span className="badge alert-success pull-right">
                    Selected
                  </span>
              <span className="badge">1234567</span> John Smith </a>
            <a href="#" className="list-group-item list-group-item-danger">
              <span className="badge alert-danger pull-right">
                    Remove
                  </span>
              <span className="badge">1234</span> John F Smith
            </a>

          </div>
        </div>
      </div>
         );
  }
}

export default Sidebar;
