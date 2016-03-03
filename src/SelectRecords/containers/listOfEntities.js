import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectEntity } from '../actions/index';
import {bindActionCreators} from 'redux';


class ListOfEntities extends Component {
  constructor(props) {
    super(props);
  }

  renderEntities() {
   
    return this.props.entities.map((entity, index) => {

     let styleBackground = () => {
       if ((index % 2) === 0) {
         return '#dcdcdc';
       } 
     };

     let {address_line_1, address_line_2, address_line_3, address_line_4, province, cpname, cpref, id} = entity;
     return <div key={id} className="twbs-container-fluid" style={{ paddingTop: '10px'}}>
        <div className="twbs-row-fluid entity" style={{padding: '10px 10px 10px 10px' }}>
          <div className="col-md-12" style={{ backgroundColor: styleBackground(), paddingBottom: '10px', paddingTop: '10px'}}>
            <h3 style={{ marginTop: '0px' }}>
            <a className="h3" href="#">{cpname}</a> 
            <small>&nbsp;[{id}]</small></h3> 
            <em className="aliases">Placeholder for aliases</em> 
            {/* <!--- Icons and selection button --->*/}
            <div className="twbs-row-fluid" style={{ paddingTop: '10px' }}>
              <div className="col-md-12 address" style={{ paddingLeft: '0px' }}> { address_line_1 }
                <br/> { address_line_2 } 
                <br/> { address_line_3 }
                <br/> { address_line_4 }
              </div>
            </div>
            {/*
            <!--- Icons and selection button --->*/}
            <div className="twbs-row-fluid" style={{ paddingTop: '10px' }}>
              <div className="col-md-8 entity-icons">
                <span className="fa-stack fa-lg" title="Approved as an Ultimate Beneficial Owner and address verification has been performed">
             <i className="fa fa-certificate fa-stack-2x" style={{color: 'purple'}}></i>
             <i className="fa fa-check fa-stack-1x fa-inverse"></i>
             </span>
                <span className="fa-stack fa-lg" title="Individual">
             <i className="fa fa-user fa-2x"></i>
             </span>
              </div>
              <div className="col-md-4 text-right">
                <a href="#" 
                   onClick= {() => this.props.selectEntity(entity) }
                   title="Select Entity" 
                   className="btn btn-primary">
                   Select
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>;
   });
    }

  render() {

    if (this.props.entities === undefined) {
      return <div></div>;
    }

    console.log("here are the entities: ", this.props.entities);

    return (
      <div>
        { this.renderEntities() }
      </div>
           );
  }
}

function mapStateToProps({ entities }) {
  return { entities };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({selectEntity}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ListOfEntities);
