import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import EntityType from '../../components/sidebar/Name/entityType.js';
import { DragSource } from 'react-dnd';

import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';


const boxSource = {
  beginDrag(props) {
    return {
      name: 'Individual'
    };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class StateOfEntityTypes extends Component {
    render() {
      let opacity = this.props.isDragging ? 0.4 : 1;
      let color = this.props.isDragging ? "#A9B5AC" : "";
      let newProps = Object.assign({}, this.props, {opacity: opacity, backgroundColor: color});
      return (
        <EntityType {...newProps} />
      );
    }
}

export default connect(null, null)(DragDropContext(HTML5Backend)(DragSource("Enity Type", boxSource, collect)(StateOfEntityTypes)));
