function setup() {
  createCanvas(400, 400);
  background(220);

}

function draw() {
  if (mouseIsPressed) {
    fill(0);
  } else {
    noStroke();
    noFill();
  }
  ellipse(mouseX,mouseY,12,12);
}
