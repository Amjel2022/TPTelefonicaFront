window.setInterval (BlinkIt, 500);
  var color = "red";

  function BlinkIt () {
    var blink = document.getElementById ("blink");
    color = (color == "azure")? "red" : "azure";
    blink.style.color = color;
    blink.style.fontSize='25px';
  }