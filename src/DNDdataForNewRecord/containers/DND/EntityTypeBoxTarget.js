import React, {PropTypes, Component} from 'react';

import Dustbin from '../../components/corporatePersonTab/accordion/shared/dustbin';
import StateOfCorporatePersonTab from '../stateOfCorporatePersonTab';
import { DropTarget } from 'react-dnd';

const boxTarget = {
   drop(props, monitor) {
      
   }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    item: monitor.getItem(),
    didDrop: monitor.didDrop()
  };
}

class EntityTypeTarget extends Component {
  render() {
    let { canDrop, isOver } = this.props;
    let isActive = canDrop && isOver;

    let backgroundColor;
    if (isActive) {
      backgroundColor = 'darkseagreen';
    } else if (canDrop) {
      backgroundColor = 'silver';
    }

    let newProps = Object.assign({}, this.props, {backgroundColor: backgroundColor, isActive: isActive});
    return (
      <Dustbin {...newProps}/>
    );
  }
}

export default DropTarget("Entity Type", boxTarget, collect)(EntityTypeTarget);
