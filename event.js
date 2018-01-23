//var table = document.getElementById("table");

 /*var handleMouseOver = function(event) {
  var target = event.target;
  while (target != table) {
    if (target.tagName == 'TD') {
      target.style.backgroundColor = 'red';
      const {width, height} = getComputedStyle(target);
      target.innerHTML = `width: ${width} height: ${height}`;
      return;
    }
    target = target.parentNode;
  }
}
var handleMouseOut = function(event) {
  var target = event.target;

  // цикл двигается вверх от target к родителям до table
  while (target != table) {
    if (target.tagName == 'TD') {
      // нашли элемент, который нас интересует!
      target.style.backgroundColor = '';
      target.innerHTML ='';
      return;
    }
    target = target.parentNode;
  }
}
table.addEventListener("mouseover", handleMouseOver);
table.addEventListener("mouseout", handleMouseOut);*/

/*table.onmouseover = function(event) {
  var target = event.target;
  while (target != table) {
    if (target.tagName == 'TD') {
      target.style.backgroundColor = 'red';
      const {width, height} = getComputedStyle(target);
      target.innerHTML = `width: ${width} height: ${height}`;
      return;
    }
    target = target.parentNode;
  }
}

table.onmouseout = function(event) {
  var target = event.target;
  while (target != table) {
    if (target.tagName == 'TD') {
      target.style.backgroundColor = '';
      target.innerHTML ='';
      return;
    }
    target = target.parentNode;
  }
}*/

 $( "#table" ).mouseover(function() {
  var target = event.target;
  while (target != table) {
    if (target.tagName == 'TD') {
      target.style.backgroundColor = 'red';
      const {width, height} = getComputedStyle(target);
      target.innerHTML = `width: ${width} height: ${height}`;
      return;
    }
    target = target.parentNode;
  }
});

 $( "#table" ).mouseout(function() {
  var target = event.target;
  while (target != table) {
    if (target.tagName == 'TD') {
      target.style.backgroundColor = '';
      target.innerHTML ='';
      return;
    }
    target = target.parentNode;
  }
});
