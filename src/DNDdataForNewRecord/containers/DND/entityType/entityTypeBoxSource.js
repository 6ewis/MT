import _BoxSource from '../_BoxSource.js';
import EntityType from '../../../components/sidebar/Name/entityType.js';
import React, {Component} from 'react';
//
//import { DragSource } from 'react-dnd';
//
//const boxSource = {
//  beginDrag(props) {
//    return {
//      value: props.entityType
//    };
//  }
//};
//
//function collect(connect, monitor) {
//  return {
//    connectDragSource: connect.dragSource(),
//    isDragging: monitor.isDragging()
//  };
//}
//
//class EntityTypeBoxSource extends Component {
//    render() {
//      let opacity = this.props.isDragging ? 0.4 : 1;
//      let color = this.props.isDragging ? "ghostwhite" : "";
//      let newProps = Object.assign({}, this.props, {opacity: opacity, backgroundColor: color});
//      return (
//        <EntityType {...newProps} />
//      );
//    }
//}

export default _BoxSource("Entity Type", EntityType);
