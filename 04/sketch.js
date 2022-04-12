/*
let x=50;
let y=150;
let d1=80;
let d2=80;

function setup() {
  createCanvas(300, 300);
  background(200);
  ellipse(x,y,d1,d2);
  x+=100;
  ellipse(x,y,d1,d2);
  x=x+100;
  ellipse(x,y,d1,d2);
}

function draw() {
 
}
*/

/*
let x1; //line x1
let x2; //line x2
let y; //y value of line

x1=50;
x2=250;
y=0;
function setup() {
  createCanvas(300,300);
}

function draw() {
  background(200);
  line(x1,y,x2,y);
  line(x1,y*2,x2,y*2);
  line(x1,y*3,x2,y*3);
  line(x1,y*4,x2,y*4);
  y+=2
  y%=300
  //print(y);
}
*/

/*
let x1=150;
let x2=150;
let d=10;

function setup() {
  createCanvas(300,300);

}

function draw() {
  if (mouseIsPressed) {
    noFill();
    ellipse(mouseX,mouseY,d,d);
    d+=15;
    d%=100;
  } else {
    noStroke();
    noFill();
    ellipse(mouseX,mouseY,d,d)
  }
}
*/

/*
let d=10;

function setup() {
  createCanvas(300,300);
}

function draw() {
  background(200);
  if (mouseIsPressed) {
    noFill();
    ellipse(mouseX,mouseY,d,d);
    d+=5;
    d%=80;
  }
}
*/

let x=100, y=200

//color variables
let cR=0, cG=100, cB=200, d=100;
let cRup, cGup, cBup;
let temp;

map(cR,0,255,0,255)
/*
if (cR==0) {
  cRup=="true";
} else if (cR==255) {
  cRup=="false";
} else {
  temp+=1;
}
while (cRup=="true") {
  cR+=1;
} while (cRup=="false") {
  cR-=1;
}
*/

function setup() {
  createCanvas(700,400);
}

function draw() {
  background(0);
  
  //bike
  push();
  stroke(255,255,0);
  strokeWeight(5);
  line(0,y+d/2,700,y+d/2);

  fill(cR,cG,cB);
  ellipse(x,y,d,d);
  ellipse(x+d,y,d,d);

  noFill();
  triangle(x,y,x+d/2,y-d,x+d,y);
  pop();
  //bike

  //text
  push();
  fill(0);
  rect(0,0,700,100)
  fill(255);
  textSize(30);
  text('Position : '+x,50,50)
  text('cR : '+cR+'  cG : '+cG+'  cB : '+cB,300,50);
  pop();
  //text

  //change bike X 
  x+=2;
  x%=500;
}
  /*
  if (cR<255) {
    cR+=2;
  } else {
    cR-=2;
  }
  if (cG<255) {
    cG+=2;
  } else {
    cG-=2;
  }
  if (cB<255) {
    cB+=2;
  } else {
    cB-=2;
  }

}
*/

