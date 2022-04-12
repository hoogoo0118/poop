/*
let x=30, y=30;
let xVel=1, yVel=1;
let xAcc=0.2, yAcc=0.2;
let friction=0.99;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  background(200);
  ellipse(x,y,30,30);
  xVel*=friction;
  yVel+=yAcc;
  x+=xVel;
  y+=yVel;
  x%=370;
  y%=370;

  textSize(15);
  text(frameCount+' : '+frameRate(),10,30);
}
*/

/*
let x=200;
let theta=0.0;
function setup() {
  createCanvas(400,400);
  frameRate(30);
}
function draw() {
  background(200);
  let y=height/2+height/2*sin(theta);
  line(x,y-40,x,y+40);
  ellipse(x,y,30,30);
  theta+=0.1;
}
*/

//bounce
/*
let x=200, y=200;
let d=30;
let theta=0.0;

function setup() {
  createCanvas(400,400);
  frameRate(60);
}

function draw() {
  background(200);
  let d=width/2+width/2*sin(theta);
  ellipse(x,y,d,d);
  theta+=0.1;
}
*/

//randomclicker1
/*
function setup() {
  createCanvas(500,500);
  background(0);
}
function draw() {
  if (mouseIsPressed) {
  strokeWeight(random(5,20));
  stroke(random(100,255), random(100,255), random(100,255));
  point(mouseX,mouseY);
  } else {
    noFill();
  }
}
*/

//randomclicker2
/*
function setup() {
  createCanvas(500,500);
}
function draw() {
  background(0);
  if (mouseIsPressed) {
  strokeWeight(5);
  stroke(random(100,255),random(100,255),random(100,255));
  fill(255);
  ellipse(mouseX,mouseY,50,50);
  } else {
    noFill();
  }
}
*/

//paint
/*
function setup() {
  createCanvas(500,500);
  background(0);
}
function draw() {
  if (mouseIsPressed) {
  stroke(255);
  line(pmouseX,pmouseY,mouseX,mouseY);
  } else {
    noFill();
  }
}
*/

//loading
let theta1=0.0, r=150.0;
let theta2=0.0

function setup() {
  createCanvas(500,500);
  background(0);
}

function draw() {
  background(0,80);
  let x=width/2+r*cos(theta1)/3;
  let y=height/2+r*sin(theta1)/3;
  noStroke();
  ellipse(x,y,30,30);
  let plus=map(tan(theta2),-1,1,0.02,0.12);
  theta1+=plus;
  theta2+=0.01;
}