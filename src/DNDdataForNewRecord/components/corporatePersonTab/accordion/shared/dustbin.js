import React, {Component} from 'react';
import R from 'ramda';
import {Row, Col} from 'react-bootstrap';

export default class DustbinSmartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {value: null, id: null, attribute: null};
  }

  componentWillReceiveProps(nextProps) {
    let {didDrop, item, getItemType, title} = nextProps;
    if ((didDrop === true) && (getItemType === title)) { this.setState({value: item.value, id: item.id, attribute: item.attribute}); }
  }

  style() {
    return {
      borderRadius: '3vh',
      border: 'dotted #8AC007',
      padding: '2% 0 2% 0',
      width: '100%',
      height: '20vh',
      backgroundColor: this.props.backgroundColor
    };
  }

  renderIfActive() {
     return <center><span style={{color: "#337ab7"}}> Release to drop </span></center>;
   }

  renderIfNotActive() {
     return <center> Drag and Drop here! </center>;
  }


  removeNullAndBlankStringsInArray(array) {
    const isAString = R.is(String);
    const trimString = R.when(isAString, R.trim);
    const isAnEmptyString = (text) => R.isEmpty(trimString(text));
    const isANullValue = (text) => R.isNil(text);
    const nullOrEmpty = R.either(isANullValue, isAnEmptyString);

    return R.reject(nullOrEmpty, array);
  }

  renderAttributeValue(attributeValue) {
    //take into account new line character
    const splitAttribute = this.removeNullAndBlankStringsInArray(attributeValue.split('\n'));
    const splitAttributeLength = splitAttribute.length;
    return splitAttribute
      .map((item, index) =>
         <div key={index}><span>{item}</span>
         {this.renderCross(index)}<br/>
         {((index > 0) && (index === (splitAttributeLength - 1))) ? <br/> : null}</div>);
  }//it could returns an empty array

  renderCross(index) {
   let {clickX} = this.props;
   return (index === 0) ?
     <span>&nbsp;&nbsp;<i onClick={() => {clickX(this.state); this.setState({value: null}); }}
        style={{color: 'firebrick', cursor: 'pointer'}} className="fa fa-times"></i></span> :
     null;
  }

  renderWhenItemDropped() {
    return <div>
             <h4 style={{color: '#337ab7'}}>
               {this.renderAttributeValue(this.state.value)}
             </h4>
          </div>;
  }

  renderContainerBox() {
    return this.props.connectDropTarget(
      <div style={this.style()}>
        {this.props.isActive ?
          this.renderIfActive() :
          this.renderIfNotActive()
        }
      </div>
    );
  }

  render() {
   return (
     <div>
       <h4><strong> {this.props.title} </strong></h4>
       {(this.state.value) ?
         this.renderWhenItemDropped() :
         this.renderContainerBox()
       }
     </div>
   );
  }
}
