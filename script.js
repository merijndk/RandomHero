var canvasL = 200;
var canvasB = 200;

Math.seed = function(s) {
    var m_w  = s;
    var m_z  = 987654321;
    var mask = 0xffffffff;

    return function() {
      m_z = (36969 * (m_z & 65535) + (m_z >> 16)) & mask;
      m_w = (18000 * (m_w & 65535) + (m_w >> 16)) & mask;

      var result = ((m_z << 16) + m_w) & mask;
      result /= 4294967296;

      return result + 0.5;
    }
}

var myRandomFunction = Math.seed(1234);
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

function drawEyes(l,b){
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.fillStyle = "#000000";
  ctx.fillRect((canvasB-b/2)/2,(canvasL-l/2)/2+10,10,10);
  ctx.fillRect((canvasB+b/2)/2-10,(canvasL-l/2)/2+10,10,10);
}

var baseB = 100;
var baseL = 180;
drawFace(baseL,baseB, "#000000", "#263b2a");

drawFace(baseL-20,baseB-20, "#263b2a", "#375738");

drawEyes(baseL,baseB);


