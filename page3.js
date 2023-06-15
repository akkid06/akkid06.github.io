class Ball{
  constructor(pColour,x,y) {
    this.x=x;
    this.y=y;
    this.colour=pColour;
    this.speed=0;
    this.isConvertible=false;
  }

  start(speed) {
    this.speed=speed;
  }

  display() {
    strokeWeight(10)
    stroke(this.colour);
    point(this.x,this.y);
  }

  move() {
    this.x+=this.speed;
    if (this.x<-20) {
      this.x=width;
    } else if (this.x>width) {
      this.x=-20;
    }
    this.y+=this.speed;
    if (this.y<-20) {
      this.y=width;
    } else if (this.y>width) {
      this.y=20;
    }
  }
}

class Ball2{
  constructor(pColour,x,y) {
    this.x=x;
    this.y=y;
    this.colour=pColour;
    this.speed=0;
    this.isConvertible=false;
  }

  start2(speed) {
    this.speed=speed;
  }

  display2() {
    strokeWeight(10)
    stroke(this.colour);
    point(this.x,this.y);
  }

  move2() {
    this.x+=this.speed;
    if (this.x<-20) {
      this.x=width;
    } else if (this.x>width) {
      this.x=20;
    }
    this.y-=this.speed;
    if (this.y<-20) {
      this.y=width;
    } else if (this.y>width) {
      this.y=-20;
    }
  }
}

class Ball3{
  constructor(pColour,x,y) {
    this.x=x;
    this.y=y;
    this.colour=pColour;
    this.speed=0;
    this.isConvertible=false;
  }

  start3(speed) {
    this.speed=speed;
  }

  display3() {
    strokeWeight(10)
    stroke(this.colour);
    point(this.x,this.y);
  }

  move3() {
    this.x+=this.speed;
    if (this.x<-20) {
      this.x=width;
    } else if (this.x>width) {
      this.x=20;
    }
  }
}

class Ball4{
  constructor(pColour,x,y) {
    this.x=x;
    this.y=y;
    this.colour=pColour;
    this.speed=0;
    this.isConvertible=false;
  }

  start4(speed) {
    this.speed=speed;
  }

  display4() {
    strokeWeight(10)
    stroke(this.colour);
    point(this.x,this.y);
  }

  move4() {
    this.y-=this.speed;
    if (this.y<-20) {
      this.y=width;
    } else if (this.y>width) {
      this.y=-20;
    }
  }
}

let point1;
let point2;
let point3;
let point4;
let point5;
let point6;

function setup() {
  // put setup code here
  var canvise=createCanvas(400,400);
  canvise.parent("drawingp3");

  point1=new Ball("#006622",50,70);
  point2=new Ball("blue",300,0);
  point3=new Ball2("#00ccff",30,15);
  point4=new Ball3("black",100,250);
  point5=new Ball3("purple",150,150);
  point6=new Ball4("#ffff33",150,0);

  console.log("point1",point1);
  console.log("point2",point2);
  console.log("point3",point3);
  console.log("point4",point4);
  console.log("point5",point5);
  console.log("point6",point6);

  point1.start(2);
  point2.start(-4);
  point3.start2(5);
  point4.start3(2);
  point5.start3(-2.5);
  point6.start4(0.5);
}

function draw() {
  // put drawing code here
  //--background--
  background(255,255,255);

  point1.display();
  point2.display();
  point3.display2();
  point4.display3();
  point5.display3();
  point6.display4();

  point1.move();
  point2.move();
  point3.move2();
  point4.move3();
  point5.move3();
  point6.move4();

  //--border--
  stroke(0,0,0);
  strokeWeight(3);
  line(0,0,0,400);
  line(0,400,400,400);
  line(400,400,400,0);
  line(400,0,0,0);
}