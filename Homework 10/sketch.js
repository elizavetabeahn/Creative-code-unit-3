// Declare variable for the horizontal position of the circle
let x = 25; //ellipse for cloud animation
let xa = 10; //ellipse for cloud animation

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background("#39AFF9");

  //make the fire tower shape
  strokeWeight(1)
  stroke(0)
  fill(149, 154, 156)
  rect(55, 55, 75, 50)
  triangle(55, 55, 90, 33, 130, 55)
  //make the legs of the tower
  strokeWeight(7)
  stroke(149, 154, 156)
  line(70, 100, 60, 200)
  line(110, 100, 120, 200)
  line(70, 100, 112, 125)
  line(112, 125, 67, 143)
  line(67, 143, 113, 160)
  //color for custom shape mountain
  strokeWeight(1)
  stroke(0)
  fill(239, 247, 251)
  //custom shape, mountain
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

  //window of fire tower
  fill("#39AFF9")
  rect(60, 60, 65, 20)

  //skiier mouse follower shape construction
  strokeWeight(5)
  line(mouseX-10, mouseY-40, mouseX-50, mouseY-20)
  strokeWeight(10)
  stroke(29, 37, 41)
  line(mouseX+30, mouseY, mouseX-30, mouseY+40)
  line(mouseX+30, mouseY+20, mouseX-30, mouseY+60)
  line(mouseX-5, mouseY-30, mouseX-10, mouseY+20)
  line(mouseX, mouseY-30, mouseX, mouseY+40)
  strokeWeight(1)
  stroke(0)
  fill(222, 60, 75)
  ellipse(mouseX-5, mouseY-30, 50, 60)
  fill(227, 183, 118)
  ellipse(mouseX-10, mouseY-50, 40, 40)
  fill(222, 60, 75)
  triangle(mouseX-20, mouseY-70, mouseX, mouseY-80, mouseX+10, mouseY-60)
  strokeWeight(7)
  point(mouseX-20, mouseY-50)
  point(mouseX-5, mouseY-50)
  strokeWeight(5)
  line(mouseX, mouseY-30, mouseX-20, mouseY-10)
  stroke(105, 35, 107)
  line(mouseX-50, mouseY-40, mouseX-50, mouseY+20)
  line(mouseX-20, mouseY-20, mouseX-20, mouseY+40)


//begin cloud animation section
    //cloud circle in back
    strokeWeight(1)
    stroke(0)
    fill(157, 198, 209);
    ellipse(xa, 100 / 2, 200, 40);

    // Increase the x variable by 2(speed of it moving)
    xa += 2;

    // Reset the circle position after it moves off the right side
    if (xa > width + 150) {
      xa = -25;
    }
    //cloud circle in front 
    fill(157, 198, 209);
      ellipse(x, 100 / 2, 100, 50);

      // Increase the x variable by 2(speed of it moving)
      x += 2;

      // Reset the circle position after it moves off the right side
      if (x > width + 150) {
        x = -25;
      }
      //end the cloud animation section

  //bottom extra stuff
  //strokeWeight(1)
  //textSize(50)
  //text(mouseX, mouseY)
  //fill(255)
  //textSize(10)
  //text("X: " + round(mouseX) + " Y: " + round(mouseY), mouseX, mouseY +30);

}