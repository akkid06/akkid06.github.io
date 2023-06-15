function setup() {
  // put setup code here
  var canvise=createCanvas(400,400);
  canvise.parent("drawingp2")
}

function draw() {
  // put drawing code here
  background(255,255,255);
  //blank
  noStroke();
  //--oblong sphroid--
  fill(0,235,255);
  ellipse(100,100,75,50);
  //--triangle--
  triangle(300,75,275,125,325,125);
  //--rectangel--
  rect(75,275,50,50);
  //--centen circal--
  ellipse(200,200,25,25);
  //--points--
  stroke(0,235,255);
  strokeWeight(5);
  point(315,300);
  point(285,300);
  point(300,315);
  point(300,285);
  //--lines--
  strokeWeight(1);
  line(0,200,400,200);
  line(200,0,200,400);
  stroke(0,0,0);
  strokeWeight(3);
  line(0,0,0,400);
  line(0,400,400,400);
  line(400,400,400,0);
  line(400,0,0,0);
}
