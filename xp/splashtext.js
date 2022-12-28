// Shamelessly borrowed from https://www.w3schools.com/howto/howto_js_typewriter.asp
var i = 0;
var txt = 'Hello World!';

function SplashText() {
  if (i < txt.length) {
    document.getElementById("SplashText").innerHTML += txt.charAt(i);
    i++;
    setTimeout(SplashText, 100);
  }
}