import React from 'react';
import {Link} from 'react-router';
import {Col, Button} from 'react-bootstrap';

const setIcon = (icon, defaultIcon) => icon || defaultIcon;

export const BackButton = ({url, icon}) => {
  return ( <Link to={url}>
               <Button bsSize="large">
                 <i className={setIcon(icon, "fa fa-arrow-left")} aria-hidden="true"></i>
                   &nbsp; Previous Step
               </Button>
           </Link>
          );
};

export const NextButton = ({url, state, icon}) => {
  return ( <Link to={url} state={state}>
              <Button bsSize="large">
                <i className={setIcon(icon, "fa fa-arrow-right")} aria-hidden="true"></i>
                  &nbsp; Next Step &nbsp; &nbsp;
              </Button>
           </Link>
          );
};

export const CancelButton = () => {
  return ( <Link to="/">
              <Button bsSize="large">
                 <i className={setIcon("fa fa-trash-o")} aria-hidden="true"></i>
                   &nbsp; Cancel Merge
              </Button>
            </Link>
          );
};
