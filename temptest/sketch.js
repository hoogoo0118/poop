let px,py;
let targetX=300;
let targetY=200;

let pointPoint(float x1,float y1,float x2,float y2) {
  if (x1==x2&&y1==y2) {
    return true;
  }
  return false;
}

void setup() {
  textSize(600,400);
  noCursor();
  strokeWeight(5);
}

void draw() {
  px=mouseX;
  py=mouseY;

  let colliding=pointPoint(px,py,targetX,targetY);
  if (colliding) {
    background(255,150,0);
  } else {
    background(255);
  }

  stroke(0,150,255);
  point(targetX,targetY);

  stroke(0,150);
  point(px,py);
}

