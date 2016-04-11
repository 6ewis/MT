import React, {Component} from 'react';

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
     return <center><small style={{color: "#337ab7"}}> Release to drop </small></center>;
   }

  renderIfNotActive() {
     return <center><small> Drag and Drop here! </small></center>;
  }

  renderWhenItemDropped() {
    let {clickX} = this.props;
    return <div>
             <h4 style={{color: '#337ab7'}}>
               {this.state.value} <i onClick={() => {clickX(this.state); this.setState({value: null}); }} style={{color: 'firebrick', cursor: 'pointer'}} className="fa fa-times"></i>
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
