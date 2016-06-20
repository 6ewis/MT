import React from 'react';
import {Link} from 'react-router';
import {Col, Button} from 'react-bootstrap';

export const BackButton = ({url}) => {
  return ( <Link to={url}>
               <Button bsSize="large">
                 <i className="fa fa-arrow-left" aria-hidden="true"></i>
                   &nbsp; Previous Step
               </Button>
           </Link>
          );
};

export const NextButton = ({url, state}) => {
  return ( <Link to={url} state={state}>
              <Button bsSize="large">
                <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  &nbsp; Next Step &nbsp; &nbsp; 
              </Button>
           </Link>
          );
};

export const CancelButton = () => {
  return ( <Link to="/">
              <Button bsSize="large">
                 <i className="fa fa-trash-o" aria-hidden="true"></i>
                   &nbsp; Cancel Merge
              </Button>
            </Link>
          );
};
