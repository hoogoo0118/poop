let x=1,y=1;
let xVel=4;
let yVel=3;

function setup() {
  createCanvas(400, 400);
  background(0);
}

function draw() {
  background(0,1);
  noStroke();
  ellipse(x,y,30,30);
  x+=xVel;
  y+=yVel;
  if (x>width||x<0) {
    xVel*=-1;
    fill(random(200,255),random(200,255),random(200,255));
  }
  if (y>height||y<0) {
    yVel*=-1;
    fill(random(200,255),random(200,255),random(200,255));
  }
  
}
