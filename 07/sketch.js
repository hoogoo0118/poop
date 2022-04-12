/*
let x=0, velocity=1;
function setup() {
  createCanvas(300,300);
}
function draw() {
  background(0);
  stroke(255);
  line(x, 0, x, height);
  x+=velocity;
  if (x<0||x>width) {
    velocity*=-1;
  }
  if (x<100||x>200) {
    ellipse(width/2, height/2, 100, 100);
  }
}
*/

//color changes when circles meet
/*
let x, y, d, r = 50.0, tx=50.0, ty=0.5;
let tR=10.0,tG=20.0,tB=30.0
function setup() {
  createCanvas(300,300);
}
function draw() {
  noStroke();
  background(0,80);
  x=noise(tx)*width;
  y=noise(ty)*height;
  d=dist(width/2,height/2,mouseX,mouseY);
  if (d<r) {
    fill(map(noise(tR),0,1,0,255),map(noise(tG),0,1,0,255),map(noise(tB),0,1,0,255),200);
  }
  ellipse(mouseX,mouseY,r,r);
  ellipse(width/2,height/2,r,r);
  tx+=0.01;
  ty+=0.01;
  tR+=0.05;
  tG+=0.05;
  tB+=0.05;
}
*/

//timechange
/*
let interval=0,currentTime=0,previousTime=0;
function setup() {
  createCanvas(300,300);
}
function draw() {
  background(0);
  currentTime=millis();   
  interval=currentTime-previousTime;
  if (interval>1000) {
    previousTime=millis();
    fill(random(255),random(255),random(255));
  }
  ellipse(width/2,height/2,200,200);
}
*/

//linefollower
/*
let x=150,y=150;
let r=20;
function setup() {
  createCanvas(300,300);
}
function draw() {
  background(0);
  stroke(255);
  line(mouseX,0,mouseX,height);
  line(0,mouseY,width,mouseY);
  ellipse(x,y,r*2,r*2);
  if (mouseX>x) {
    x+=2;
  } else {
    x-=2;
  }
  if (mouseY>y) {
    y+=2;
  } else {
    y-=2;
  }
}
*/

//3way rect
/*
function setup() {
  createCanvas(300,300);
}
function draw() {
  background(0);
  fill(255,255,0);
  if (mouseY<height/3) {
    rect(0,0,width,height/3);
  } else if (mouseY<height*2/3) {
    rect(0,height/3,width,height/3);
  } else {
    rect(0,height*2/3,width,height/3);
  }
}
*/

/*
//4way rect
function setup() {
  createCanvas(300,300);
}
function draw() {
  background(0);
  fill(255,255,0);
  if (mouseY<height/2&&mouseX<width/2) {
    rect(0,0,width/2,height/2);
  } else if (mouseY>height/2&&mouseX<width/2) {
    rect(0,height/2,width/2,height);
  } else if (mouseY<height/2&&mouseX>width/2) {
    rect(width/2,0,width,height/2);
  } else {
    rect(width/2,height/2,width,height);
  }
}
*/

/*
function setup() {
  createCanvas(300,300);
  background(0);
  fill(255);
  ellipse(width/2,height/2,200,200);
}

function draw() {
  background(0);
  if (keyIsPressed&&(key==='a')) {
    fill(255,0,0);
  } else if (keyIsPressed&&((key=='d'||(key=='D')))) {
    fill(0,255,0);
  } else {
    fill(0,0,255);
  }
  ellipse(width/2,height/2,200,200);
  function mouseReleased() {
    background(0);
  }
}
*/

/*
let degree=90;
function setup() {
  createCanvas(300,300);
}

function draw() {
  background(0);
  if (keyIsPressed) {
    if ((key>='0')&&(key<='9')) {
      degree=map(key,'0','9',0,360);
    }
  }
  arc(width/2,height/2,200,200,0,radians(degree));
}
*/
class Boop{
  constructor() {
  }
  appear() {
    fill(255);
    ellipse(150,150,50,50);
  }
}

function appear() {
  fill(255);
  ellipse(150,150,50,50);
}

let appearOn=false;

function setup() {
  createCanvas(300,300);
  background(0);
  boop=new Boop();
}

function draw() {
  if (keyIsPressed===true&&keyCode==LEFT_ARROW) {
    appearOn=true;
  } else if (keyIsPressed===true&&keyCode==RIGHT_ARROW) {
    appearOn=false;
  }

  if (appearOn==true) {
    boop.appear();
  } else {
    return;
  }

  console.log(appearOn);
}
