import React, {Component} from 'react';
//DND
import { DropTarget } from 'react-dnd';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { dropItem } from '../../actions/index';


const boxTarget = {
   drop(props, monitor) {
     console.log("Thanks for dropping: ", monitor.getItem());
     let dispatchDropItem = props.dropItem;
     dispatchDropItem(monitor.getItem());
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({dropItem}, dispatch);
}

export default (Type, DestinationComponent) => {
  let Partial = DropTarget(Type, boxTarget, collect)(ComponentTarget(DestinationComponent));
  return connect(null, mapDispatchToProps)(Partial);
};
