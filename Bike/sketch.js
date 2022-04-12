/*
let x=0, y=200, c=0, d=100, r=d/2;
let theta=0.0;

function setup() {
  createCanvas(700,400);
  frameRate(40);
}

function draw() {
  background(0);

  let x=width/2-r+(width-2*d)/2*sin(theta);
  let c=map(sin(2*theta),-1,1,0,255);

  stroke(255);
  strokeWeight(1);
  fill(255);
  textSize(25);
  text('Distance: '+Math.round(x),100,50);
  text('Color: '+Math.round(c),400,50);
  
  stroke(255,255,0);
  strokeWeight(5);
  line(0,y+d/2,700,y+d/2);

  fill(c,0,0);
  ellipse(x,y,d,d);
  ellipse(x+d,y,d,d);

  noFill();
  triangle(x,y,x+d/2,y-d,x+d,y);

  x++;
  x%=700;
  theta+=0.1;
}
*/

let x=0, y=200, c=0, d=100, r=d/2;
let theta=0.0;

function setup() {
  createCanvas(700,400);
  frameRate(40);
}

function draw() {
  background(0);

  let x=mouseX;
  let c=map(sin(2*theta),-1,1,0,255);

  stroke(255);
  strokeWeight(1);
  fill(255);
  textSize(25);
  text('Distance: '+Math.round(x),100,50);
  text('Color: '+Math.round(c),400,50);
  
  stroke(255,255,0);
  strokeWeight(5);
  line(0,y+d/2,700,y+d/2);

  fill(c,0,0);
  ellipse(x,y,d,d);
  ellipse(x+d,y,d,d);

  noFill();
  triangle(x,y,x+d/2,y-d,x+d,y);

  x++;
  x%=700;
  theta+=0.1;
}