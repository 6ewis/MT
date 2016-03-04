import React, { Component } from 'react';
import { connect } from 'react-redux';
import SelectedEntity from '../components/selectedEntity';

class CurrentlySelectedEntities extends Component {
  constructor(props) {
    super(props);
  }

  renderSelectedEntities() {
    return this.props.selectedEntities.map((entity) => {
      return (<SelectedEntity key={entity.id} entity={entity}/>);
    });
  }

 render() {

  // if ((this.props.selectedEntities.length === 0) || (this.props.selectedEntities.length === 1)) {
  //    if (document.querySelector('.flip-container') !== null ) {
  //   document.querySelector('.flip-container').classList.toggle('hover');
  //   }
  // }
   return (
     <div>
       { this.renderSelectedEntities() }
     </div>
   );
 }

}

function mapStateToProps({selectedEntities}) {
  return { selectedEntities };
}

export default connect(mapStateToProps)(CurrentlySelectedEntities);
