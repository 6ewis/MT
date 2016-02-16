'use strict';

var Html5DragAndDrop = {
  //hml5 DND function
  drag: function(ev) {
    var nameOfClass = ev.target.getAttribute('class');
   //var data = {content: ev.target.children[1].textContent, id: ev.target.id, className: ev.target.getAttribute('class')}
    console.log("im in html5drop : ", ev.target.id);
    console.log("the name of the class is: ", nameOfClass);
    ev.dataTransfer.setData(nameOfClass, ev.target.id);
  }
  //thinking about moving the logic from roundedSquare 
  //dragging and dropping into html5 
};

module.exports = Html5DragAndDrop;
