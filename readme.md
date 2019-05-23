**HOI**

De poster is gemaakt door de ontwerper Gunter Rambow om Shakespear’e welbekende stuk Othello in Hessisches Staatstheatre in Wiesbaden te promoten. Thema’s als moord, jaloezie en verraad komen voorbij in dit stuk. Echter is deze digitale poster wat vrolijker.

De ogen zijn gestyled in HTML/CSS. 2 aparte ogen in één div, met hierin weer twee aparte pupillen. Deze pupillen worden in JavaScript weer aangeroepen door de eerste 16 regels. Hierin wordt aangegeven dat de pupillen de muis volgen over de pagina. Dit wordt berekend aan de hand van de breedte en hoogte van de pagina op dat moment. 

```var pupillen = document.getElementsByClassName('pupil');
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
```

Ook kan er op het linkeroog geklikt worden, waardoor er een knipoog wordt gegeven.
```
var knipoog = document.getElementById('firsteye');
knipoog.addEventListener('click', function() { // bij klikken op linkeroog --> knipoog
    knipoog.classList.toggle('knipoog');
});
```

En hoewel het rode element rechts in de poster als bloed wordt gezien, dient het in deze animatie als touw waarop geklikt kan worden om te veranderen van dark naar light mode. Bij hover wordt het touw iets groter, bij active wederom iets groter.

```
.touw:hover {  /* bij hover wordt touw groter */
  transform: scale(1.1);
  transition: 0.3s;
}

.touw:active {  /* wanneer ingedrukt wordt touw nog groter */
  transform: scale(1.1, 1.3);
  transition: 0.3s;
}
```
en ook slide deze in:
```
.touw {
  margin-left: 60%;
  width: 4vw;
  top: 0;
  position: absolute;
  cursor: pointer;
  animation: touwanimatie 1s ease-in;
}

@keyframes touwanimatie { /* slide in bij refreshen */
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0%);
  }
}
```

Bij het klikken op het touw wordt er dus gewisseld tussen dark en light mode en knipperen de ogen:
```
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
  body.classList.toggle('light');
  eye1.classList.toggle('close');
  eye2.classList.toggle('close');
  text.classList.toggle('lighttext');
  eye1.classList.toggle('eye1light');
  eye2.classList.toggle('eye2light');
  pupileen.classList.toggle('pupillight');
  pupiltwee.classList.toggle('pupillight');
});
```

Door op de spatiebalk te drukken veranderd de achtergrond in verschillende kleuren. Dit gaat ook weer uit bij het drukken op de spatiebalk door de 'toggle' in JavaScript.
```
var discolight = document.querySelector("body");
document.addEventListener('keypress', function(e){ // bij klikken op spatiebalk gaat disco aan en uit
  if(e.keyCode === 32) {
    discolight.classList.toggle("disco");
    // audio.play();
  }
});
```

Tot slot kan er op de 0 worden geklikt waardoor er een mond tevoorschijn komt, en ook weer out fade.
```
var discolight = document.querySelector("body");
document.addEventListener('keypress', function(e){ // bij klikken op spatiebalk gaat disco aan en uit
  if(e.keyCode === 32) {
    discolight.classList.toggle("disco");
    // audio.play();
  }
});
```



