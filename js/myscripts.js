// My wheelchair animation.
var id = null;
function myMove() {
  var el = document.getElementById("animation-container");
  var elW = el.clientWidth;
  //alert(`width: ${elW}`);

  var elem = document.getElementById("wheelchair-animation");
  var elemW = elem.clientWidth;
  //alert(`width: ${elemW}`);

  var pos = elem.offsetLeft;
  var start = pos;
  var end = elW - elemW - elem.offsetLeft;

  clearInterval(id);
  id = setInterval(frame, 5);
  var forward = 1;

  function frame() {
    if (forward == 1) {
      if (pos == end) {
        pos = end - 1;
        forward = 0;
        elem.style.transform = "scaleX(-1)"; //flip horizontally
      }
      else {
        pos++;
        elem.style.left = pos + 'px';
      }
    }
    else {
      if (pos == start - 1) {
        clearInterval(id);
        elem.style.left = elem.style.margin;
        elem.style.transform = "scaleX(1)"; //flip back horizontally
      } else {
        pos--;
        elem.style.left = pos + 'px';
      }
    }
  }
}

// I'm not using this currently but will leave it here for now.
document.addEventListener('DOMContentLoaded', function() {
   let plsbuttons = document.querySelectorAll(".plsbuttons");
   for (let i = 0; i < plsbuttons.length; i++) {
      plsbuttons[i].addEventListener('click', function() {
         // Set background color to red
         plsbuttons[i].style.backgroundColor = 'Red';
      });
   }
});


