import React from 'react';

let SidebarPartial = React.createClass({
  render: function() {
    let me = this;
    let sideBarHeaderStyle = {fontSize: "25px", 
                              fontFamily: 'museo-slab, Georgia, "Times New Roman", Times, serif', 
                              fontWeight: 'bold'};

       
    function renderChildren() {
      return React.Children.map(me.props.children, (child) => {
       return React.cloneElement(child, {
        selectedEntities: me.props.selectedEntities,
        sideBarHeaderStyle: sideBarHeaderStyle
       });
      });
    }

    return (
     <div>
         <div className="large-9 large-centered columns">
          <h1 style={{fontFamily: "'Arial', 'sans-serif', 'cursive'"}}>
          </h1>
        </div><br/>

        <div className="medium-3 columns">
          <div>
            <strong style={{marginLeft: '30px'}}>
              Available Selections
            </strong>
            <div className="row" style={{backgroundColor: '#EFEFEF'}}>
              <div style={{marginLeft: '0px', marginBottom: '500px'}}>
                {renderChildren()}
             </div>
            </div>
          </div>
        </div>
     </div>
    ); }
});

export default SidebarPartial;
