import React from 'react';
import {Link} from 'react-router';


const styleInline = {display: 'inline'};

export const BackButton = ({url}) => {
  return ( <Link to={url}
                 className='btn btn-default btn-lg btn-block'>
                 <i className="fa fa-arrow-left" aria-hidden="true"></i>
                 <div style={styleInline}>&nbsp; Previous Step</div>
           </Link>
          );
};

export const NextButton = ({url, state}) => {
  return ( <Link to={url} state={state} className='btn btn-default btn-lg btn-block'>
                  <i className="fa fa-arrow-right" aria-hidden="true"></i>
                  <div style={styleInline}>&nbsp; Next Step </div>
           </Link>
          );
};

export const CancelButton = () => {
  return ( <Link to="/"
                  className='btn btn-default btn-lg btn-block'>
                  <i className="fa fa-trash-o" aria-hidden="true"></i>
                  <div style={styleInline}>&nbsp; Cancel Merge</div>
            </Link>
          );
};
