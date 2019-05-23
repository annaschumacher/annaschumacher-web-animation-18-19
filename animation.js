
var pupillen = document.getElementsByClassName('pupil');
document.onmousemove = function() {
  var x = event.clientX * 100 /window.innerWidth + "%";
  var y = event.clientY * 100 /window.innerHeight + "%";
  //event.clientX => get the horizontal coordinate of the mouse
  //event.clientY => get the Vertical coordinate of the mouse
  //window.innerWidth => get the browser width
  //window.innerHeight => get the browser height

  for(var i=0;i<2;i++){
    pupillen[i].style.left = x;
    pupillen[i].style.top = y;
    pupillen[i].style.transform = "translate(-"+x+",-"+y+")";
  }
}
//https://darkcode1.blogspot.com/2018/12/eyes-follow-mouse-cursor-using-html-css.html

var eye1 = document.querySelector('.eye1');
var eye2 = document.querySelector('.eye2');
var eye1light = document.querySelector('.eye1light');
var eye2light = document.querySelector('.eye2light');
var pupil = document.querySelector('.pupil');
var pupileen = document.getElementById('oogeen');
var pupiltwee = document.getElementById('oogtwee');
var text = document.querySelector('.text')
var body = document.querySelector('body');
var touw = document.querySelector('.touw');


touw.addEventListener('click', function() { // bij klikken op touw worden alle onderste classes toegevoegd
  eye1.classList.remove('knipoog'); // remove omdat er bij het klikken op het touw anders meerdere classes worden toegevoegd door knipoog
  // eye2.classList.remove('knipoog');
  body.classList.toggle('light');
  eye1.classList.toggle('close');
  eye2.classList.toggle('close');
  text.classList.toggle('lighttext');
  eye1.classList.toggle('eye1light');
  eye2.classList.toggle('eye2light');
  pupileen.classList.toggle('pupillight');
  pupiltwee.classList.toggle('pupillight');
});


var knipoog = document.getElementById('firsteye');
knipoog.addEventListener('click', function() { // bij klikken op linkeroog --> knipoog
    knipoog.classList.toggle('knipoog');
});

// var audio = new Audio('sound1.wav');
var discolight = document.querySelector("body");
document.addEventListener('keypress', function(e){ // bij klikken op spatiebalk gaat disco aan en uit
  if(e.keyCode === 32) {
    discolight.classList.toggle("disco");
    // audio.play();
  }
});

var discolight = document.querySelector("body");
document.addEventListener('dblclick', function(e){ // bij klikken op spatiebalk gaat disco aan en uit
  body.classList.toggle("disco");
});

var mondanimatie = document.querySelector('.mond');
document.addEventListener('keypress', function(e){ // bij klikken op 0 komt er een mond tevoorschijn en gaat ook weer weg
  if(e.keyCode === 48) {
    mondanimatie.classList.toggle('mondopen');
  }
});
