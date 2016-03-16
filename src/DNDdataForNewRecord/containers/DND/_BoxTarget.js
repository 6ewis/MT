import React, {Component} from 'react';
import { DropTarget } from 'react-dnd';

const boxTarget = {
   drop(props, monitor) {
     console.log("Thanks for dropping: ", monitor.getItem());
   }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    item: monitor.getItem(),
    didDrop: monitor.didDrop(),
    getItemType: monitor.getItemType()
  };
}

let ComponentTarget = (DestinationComponent) => {
  return class extends Component {
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
        <DestinationComponent {...newProps}/>
      );
    }
  };
};

export default (Type, DestinationComponent) => {
  return DropTarget(Type, boxTarget, collect)(ComponentTarget(DestinationComponent));
};
