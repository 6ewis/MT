import React, {Component} from 'react';

export default class DustbinSmartComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {item: null};
  }

  componentWillReceiveProps(nextProps) {
    let {didDrop, item} = nextProps;
    if (didDrop === true) { this.setState({item: item.value}); }
  }

  style() {
    return {
      borderRadius: '10%',
      border: 'dotted #8AC007',
      padding: '2% 0 2% 0',
      width: '20%',
      backgroundColor: this.props.backgroundColor
    };
  }

  renderIfActive() {
     return <center><h4 style={{color: "#337ab7"}}> Release to drop </h4></center>;
   }

  renderIfNotActive() {
     let {didDrop, item} = this.props;
     return <center><small> Drag and Drop here! </small></center>;
  }

  renderWhenItemDropped() {
    return <h4 style={{color:'#337ab7', fontFamily: "cursive"}}>{this.state.item}</h4>;
  }

  renderContainerBox() {
    return (
      <div style={this.style()}>
        {this.props.isActive ?
          this.renderIfActive() :
          this.renderIfNotActive()
        }
      </div>
    );
  }

  render() {
   let {connectDropTarget, name} = this.props;

   return connectDropTarget(
     <div>
       <h4><strong> {name + ":"} </strong></h4>
       {this.state.item ?
         this.renderWhenItemDropped() :
         this.renderContainerBox()
       }
     </div>
   );
  }
}
