import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeEntity } from '../actions/index';
import {bindActionCreators} from 'redux';

class selectedEntity extends Component {

  constructor(props) {
   super(props);
   this.state = {hover: false};
  }

  toggleHover() {
    this.setState({hover: !this.state.hover});
  }

  removeEntity() {
    this.toggleHover();
    this.props.removeEntity(this.props.entity);
  }

  render() {
    let {id, name} = this.props.entity;

    return (
      <a href="#"
         onMouseEnter = {this.toggleHover.bind(this)}
         onMouseLeave = {this.toggleHover.bind(this)}
         className={(this.state.hover === true) ? "list-group-item list-group-item-danger" : "list-group-item list-group-item-success"}>
        <span className="badge alert-danger pull-right">
          <i onClick={this.removeEntity.bind(this)} style={{color: "a94442" }} className="fa fa-times fa-3 scaleOnHover"></i>
        </span>
        <span className="badge">
          {id}
        </span>
          {name}
      </a>
           );
  }

}

 function mapDispatchToProps(dispatch) {
   return bindActionCreators({removeEntity}, dispatch);
 }

export default connect(null, mapDispatchToProps)(selectedEntity);
