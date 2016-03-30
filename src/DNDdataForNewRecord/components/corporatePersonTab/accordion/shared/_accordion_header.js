import React, {Component} from 'react';
import Dustbin from './dustbin';
import _BoxTarget from '../../../../containers/DND/_BoxTarget';
import { Panel } from 'react-bootstrap';

export default (props) => {

  function renderDropTargetOf(Type, Element, newProp) {
    return React.createElement(_BoxTarget(Type, Element), newProp);
  }

  function handleOnClick() {
    let dispatchSelectAccordion = props.selectAccordion;
    dispatchSelectAccordion(props.dispatchSelectAccordionValue);
  }

  function renderDropTargets() {
    let {clickX, dropTargetTypes} = props;

    return dropTargetTypes.map((x, index) => {
      return <span key={index}>
               { renderDropTargetOf(x, Dustbin, {title: x, clickX: clickX}) }
             </span>;
      //the title of the dustin shown on the UI is equivalent to the drop target types
      //that _BoxSource and _BoxTarget  use
    });
  }

  let header = <span onClick= {handleOnClick.bind(this)}>
                       { props.header }
               </span>;

  return (
      <Panel {...props} header= {header}>
        {renderDropTargets()}
      </Panel>
    );
};
