import React, {Component} from 'react';

export default (props) => {
 var styleRoundSquare = {
       borderRadius: '10%',
       border: 'dotted #8AC007',
       padding: '2% 0 2% 0',
       width: '20%',
    };

  return (
    <div>
      <h4> {props.name} </h4>
      <div style={styleRoundSquare}>
            <center><small>Drag and Drop here!</small></center>
      </div>
    </div>
  );
};
