import React, {Component} from 'react';
import { DragSource } from 'react-dnd';
import R from 'ramda';

const boxSource = {
  beginDrag(props) {
    return {
      attribute: props._draggedItem.attribute,
      value: props._draggedItem.value,
      id: props._draggedItem.id
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const ComponentSource = (OriginalComponent) => {
  return class extends Component {
     render() {
      let opacity = this.props.isDragging ? 0.4 : 1;
      let color = this.props.isDragging ? "ghostwhite" : "";
      let newProps = Object.assign({}, this.props, {opacity: opacity, backgroundColor: color});
      return (
        <OriginalComponent {...newProps} />
      );
    }
  };
};

export default R.memoize((Type, OriginalComponent) => {
  return DragSource(Type, boxSource, collect)(ComponentSource(OriginalComponent));
});
