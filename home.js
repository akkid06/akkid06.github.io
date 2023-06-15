function setup() {
  // put setup code here
  var canvise=createCanvas(400,400);
  canvise.parent("drawing")
  textSize(40);
}

function draw() {
  // put drawing code here
  background(176,224,230);
  //blank
  noStroke();
  //--welcome sing--
  fill(100,100,100);
  ellipse(300,100,100,100);
  ellipse(300,300,100,100);
  ellipse(100,100,100,100);
  ellipse(100,300,100,100);
  fill(0,0,255);
  triangle(0,200,200,0,400,200);
  triangle(200,400,0,200,400,200);
  fill(240,255,255);
  ellipse(300,100,50,50);
  ellipse(300,300,50,50);
  ellipse(100,100,50,50);
  ellipse(100,300,50,50);
  fill(255,255,0);
  textAlign(CENTER);
  drawWords(width*0.5);
}

function drawWords(x) {
  text("WELCOME",x,208);
}
