'use strict';

var React = require('react');

var Header = React.createClass({
  _getTitleFromUrl: function() {
    // note now that we use createHistory instead of creatHashHistory
    // foundation will not load properly on  first load when the hash url is being used (third party issue)
    //https://github.com/zurb/foundation/issues/3692
    // it needs to be changed
     // return window.location.hash.split('/')[1].replace(/([A-Z]+)/g, " $1").trim();
  },
  getInitialState: function() {
    var me = this;
    return {title: me._getTitleFromUrl()};
  },
   componentWillReceiveProps: function() {
    var me = this;
    me.setState({title: me._getTitleFromUrl()}); 
  },
  render: function() {
       return (
      <div className="sticky">
        <nav className="top-bar" data-topbar role="navigation"
         data-options="sticky_on: [large, medium]">
          <ul className="title-area">
            <li className="name">
              <h1><a href="#"> {this.state.title} </a></h1>
            </li>
            <li className="toggle-topbar menu-icon"><a href="#"><span>Menu</span></a></li>
          </ul>

          <section className="top-bar-section">
            <ul className="right">
              <li className="active"><a href="#">{this.state.title}</a></li>
              <li className="has-dropdown">
                <a href="#">Menu</a>
                <ul className="dropdown">
                  <li><a href="#">First link in dropdown</a></li>
                  <li className="active"><a href="#">Active link in dropdown</a></li>
                </ul>
             </li>
            </ul>

            <ul className="left">
              <li><a href="#">Codan</a></li>
            </ul>
          </section>
        </nav>
      </div>
    );
  }
});

module.exports = Header;
