var xspacing = 16;    // Distance between each horizontal location
var w;                // Width of entire wave
var theta = 0.0;
var amplitude = 75.0;
var period = 500.0;
var dx;
var yvalues;

function setup() {
  createCanvas(710, 400);
  w = width+16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w/xspacing));
}

function draw() {
  background(0);
  calcWave();
  renderWave();
}

function calcWave() {

  theta += 0.02;


  var x = theta;
  for (var i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x)*amplitude;
    x+=dx;
  }
}

function renderWave() {

  for (var x = 0; x < yvalues.length; x++) {

		stroke(lerpColor(color('#ea0043'), color('#0fefca'), random(0,1)/1));
		line(x*xspacing, height/2+yvalues[x], 100,100);
  }
}
