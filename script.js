var canvasL = 200;
var canvasB = 200;

Math.seed = function(s) {
    var m_w  = s;
    var m_z  = 987654321;
    var mask = 0xffffffff;

    return function() {
      m_z = 36969 * (m_z & 65535) + (m_z >> 16);
      m_w = 18000 * (m_w & 65535) + (m_w >> 16);

      var result = ((m_z << 16) + m_w) & mask;

      return result;
    }
}

var myRandomFunction = Math.seed(12344);
var randomNumber = myRandomFunction();

console.log(randomNumber);

function init(){
  document.getElementById('myCanvas').setAttribute('width',canvasB);
  document.getElementById('myCanvas').setAttribute('height',canvasL);
}

init();

function drawFace(l,b, color1, color2){

  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = color1;


  ctx.fillRect((canvasB-b)/2+20,(canvasL-l)/2,b-40,10);
  ctx.fillRect((canvasB-b)/2+30,(canvasL+l)/2-10,b-60,10);

  ctx.fillRect((canvasB-b)/2,(canvasL-l)/2+20,10,l-50);
  ctx.fillRect((canvasB+b)/2-10,(canvasL-l)/2+20,10,l-50);

  ctx.fillStyle = color1;
  ctx.fillRect((canvasB-b)/2+10,(canvasL+l)/2-30,10,10);
  ctx.fillRect((canvasB-b)/2+20,(canvasL+l)/2-20,10,10);
  ctx.fillRect((canvasB+b)/2-20,(canvasL+l)/2-30,10,10);
  ctx.fillRect((canvasB+b)/2-30,(canvasL+l)/2-20,10,10);

  ctx.fillRect((canvasB-b)/2+10,(canvasL-l)/2+10,10,10);
  ctx.fillRect((canvasB+b)/2-20,(canvasL-l)/2+10,10,10);

  //fill in
  ctx.fillStyle = color2;
  ctx.fillRect((canvasB-b)/2+20,(canvasL-l)/2+10,b-40,l-30);
  ctx.fillRect((canvasB-b)/2+10,(canvasL-l)/2+20,10,l-50);
  ctx.fillRect((canvasB+b)/2-20,(canvasL-l)/2+20,10,l-50);
  ctx.fillRect((canvasB-b)/2+30,(canvasL+l)/2-20,b-60,10);
}

function drawEyes(l,b,color){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = color;
  ctx.fillRect((canvasB-b/2)/2,(canvasL-l/2)/2+10,10,10);
  ctx.fillRect((canvasB+b/2)/2-10,(canvasL-l/2)/2+10,10,10);
}

function digitn(number, n){
	return Math.floor((number*(10^n))%10);
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function colorfromnumber(n){
	var r = (n*123)%255;
	var g = (n*39)%255;
	var b = (n*88)%255;
	return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

randomNumber = Math.random();
console.log(randomNumber);
//eerste getal achter de komma maal 20 wordt breedte
var baseB = (digitn(randomNumber,1)+1)*20;
//tweede getal achter de komma maal 20 wordt lengte
var baseL = (digitn(randomNumber,2)+1)*20;

colorfromnumber(digitn(randomNumber,1));
//buitenste rand
var color_border1 = colorfromnumber(digitn(randomNumber,3));
//binnenste rand
var color_border2 = colorfromnumber(digitn(randomNumber,4));
//invulling
var color_interior = colorfromnumber(digitn(randomNumber,5));
//ogen
var color_eyes = colorfromnumber(digitn(randomNumber,6));

drawFace(baseL, baseB, color_border1, color_border2);

drawFace(baseL-20, baseB-20, color_border2, color_interior);

drawEyes(baseL, baseB, color_eyes);


