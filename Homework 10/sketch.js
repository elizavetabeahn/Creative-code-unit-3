function setup() {
  createCanvas(400, 600);
}

function draw() {
  background("#39AFF9");

  //color for custom shape
  fill(239, 247, 251)
  //custom shape
  beginShape();
  //vertices inside shape
  vertex(0, 200);
  vertex(300, 100);
  vertex(400, 150);
  vertex(400, 600);
  vertex(0, 600);
  // Stop drawing the shape.
  endShape(CLOSE);

  //sun shape
  fill(248, 207, 119)
  ellipse(375, 30, 100);

  //bottom extra stuff
  textSize(50)
  text("🪲", mouseX, mouseY)
  fill(0)
  textSize(10)
  text("X: " + round(mouseX) + " Y: " + round(mouseY), mouseX, mouseY +30);

}