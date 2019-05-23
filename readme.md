De poster is gemaakt door de ontwerper Gunter Rambow om Shakespear’e welbekende stuk Othello in Hessisches Staatstheatre in Wiesbaden the promoten. Thema’s als moord, jaloezie en verraad komen voorbij in dit stuk. Echter is deze digitale poster wat vrolijker.

De ogen zijn gestyled in HTML/CSS. 2 aparte ogen in één div, met hierin weer twee aparte pupillen. Deze pupillen worden in JavaScript weer aangesproken door de eerste 16 regels. Hierin wordt aangegeven dat de pupillen de muis volgen over de pagina. Dit wordt berekend aan de hand van de breedte en hoogte van de pagina op dat moment. 

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

En hoewel het rode element rechts in de poster als bloed wordt gezien, dient het in deze animatie als touw waarop geklikt kan worden om het licht aan en uit te doen. Bij hover wordt het touw iets groter, bij active wederom iets groter.
