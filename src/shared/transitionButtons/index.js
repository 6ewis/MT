import React from 'react';
import {Link} from 'react-router';
import {Col, Button} from 'react-bootstrap';

const styleInline = {display: 'inline'};

export const BackButton = ({url}) => {
  return ( <Link to={url}>
               <Button bsSize="large">
                 <i className="fa fa-arrow-left" aria-hidden="true"></i>
                 <div style={styleInline}>
                   Previous Step
                 </div>
               </Button>
           </Link>
          );
};

export const NextButton = ({url, state}) => {
  return ( <Link to={url} state={state}>
              <Button bsSize="large">
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                <div style={styleInline}>
                  Next Step
                </div>
              </Button>
           </Link>
          );
};

export const CancelButton = () => {
  return ( <Link to="/">
              <Button bsSize="large">
                 <i className="fa fa-trash-o" aria-hidden="true"></i>
                 <div style={styleInline}>
                   Cancel Merge
                 </div>
              </Button>
            </Link>
          );
};
