// Declare variable for the horizontal position of the circle
let x = 25; //ellipse for cloud animation
let xa = 10; //ellipse for cloud animation

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background("#39AFF9");

  //color for custom shape
  strokeWeight(1)
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

  //tree trunk
  fill(118, 69, 47)
  triangle(50, 300, 80, 420, 30, 420)


  //tree custom shape
  fill(39, 104, 65)
  beginShape();
  vertex(45, 150);
  vertex(90, 200);
  vertex(70, 205);
  vertex(105, 280);
  vertex(90, 290);
  vertex(115, 375);
  vertex(-5, 375);
  vertex(10, 290);
  vertex(-5, 280);
  vertex(30, 205);
  vertex(10, 200);
  endShape(CLOSE);

//begin cloud animation section
    //cloud circle in back
    fill(255);
    ellipse(xa, 100 / 2, 200, 40);

    // Increase the x variable by 2(speed of it moving)
    xa += 2;

    // Reset the circle position after it moves off the right side
    if (xa > width + 150) {
      xa = -25;
    }
    //cloud circle in front 
    fill(255);
      ellipse(x, 100 / 2, 100, 50);

      // Increase the x variable by 2(speed of it moving)
      x += 2;

      // Reset the circle position after it moves off the right side
      if (x > width + 150) {
        x = -25;
      }
      //end the cloud animation section

  //bottom extra stuff
  textSize(50)
  text("🪲", mouseX, mouseY)
  fill(0)
  textSize(10)
  text("X: " + round(mouseX) + " Y: " + round(mouseY), mouseX, mouseY +30);

}