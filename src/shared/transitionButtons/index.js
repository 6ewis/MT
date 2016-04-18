import React from 'react';
import {Link} from 'react-router';


export const BackButton = ({url}) => {
  return ( <Link to={url}
                 className='btn btn-default btn-lg btn-block'>
                 <i className="fa fa-arrow-left" aria-hidden="true"></i>
                 &nbsp;Previous Step
           </Link>
          );
};

export const NextButton = ({url, state}) => {
  return ( <Link to={url} state={state}
                  className='btn btn-default btn-lg btn-block'>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  &nbsp;Next Step
           </Link>
          );
};

export const CancelButton = () => {
  return ( <Link to="/"
                  className='btn btn-default btn-lg btn-block'>
                  <i className="fa fa-trash-o" aria-hidden="true"></i>
                  &nbsp;Cancel Merge
            </Link>
          );
};
