function setup() {
  // put setup code here
  var canvise=createCanvas(400,400);
  canvise.parent("drawingp4");
}

function draw() {
  // put drawing code here
  //--background--
  background(255,255,255);

  //--drawing--
  draw=function() {
    if (mouseIsPressed) {
    fill(0,mouseX,mouseY);
  } else {
    fill(mouseX,mouseY,0);
  }
    stroke(0,0,0);
    strokeWeight(3);
    line(0,0,0,400);
    line(0,400,400,400);
    line(400,400,400,0);
    line(400,0,0,0);
    noStroke();
    ellipse(mouseX,mouseY,20,20);
  }
}