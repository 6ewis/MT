import React, {PropTypes, Component} from 'react';

import Dustbin from '../../components/corporatePersonTab/accordion/shared/dustbin';
import { DropTarget } from 'react-dnd';

const boxTarget = {
   drop() {
     return { name: 'Individual'};
   }

};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}

class EntityTypeBoxTarget extends Component {
  render() {
    let { canDrop, isOver, connectDropTarget } = this.props;
    let isActive = canDrop && isOver;

    let backgroundColor;
    if (isActive) {
      backgroundColor = 'silver';
    } else if (canDrop) {
      backgroundColor = 'black';
    }

    let newProps = Object.assign({}, this.props, {backgroundColor: backgroundColor, isActive: isActive});
    return connectDropTarget(
      <Dustbin {...newProps}/>
    );
  }
}

export default DropTarget("Entity Type", boxTarget, collect)(EntityTypeBoxTarget);
