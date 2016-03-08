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

  componentWillReceiveProps(nextProps) {
    //if the number of items currently selected goes from 0 to 1 OR 0 to 1 then we want the sidebar to hover
    if ( (nextProps.selectedEntities.length === 1 && this.props.selectedEntities.length === 0)
       || (nextProps.selectedEntities.length === 0 && this.props.selectedEntities.length === 1) ){
      document.querySelector('.flip-container').classList.toggle('hover');
    }
  }

 render() {
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
