import React, {Component} from 'react';
import { DragSource } from 'react-dnd';

const boxSource = {
  beginDrag(props) {
    return {
      value: props.entityType
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

let ComponentSource = (OriginalComponent) => {
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

export default (Type, OriginalComponent) => {
  return DragSource(Type, boxSource, collect)(ComponentSource(OriginalComponent));
};
