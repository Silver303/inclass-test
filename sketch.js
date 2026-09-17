console.log("I believe that I can learn this.");

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(20);
  fill(255, 120, 60);
  circle(mouseX, mouseY, 50);
  fill(255, 0, 60);
  circle(400, 200, 100);
  circle(500, 400, 200);
  fill(90, 0, 300);
  rect(100, 250, 200, 300);
  fill(150, 30, 100);
  rect(20, 50, 700, 10);
  rect(20, 50, 10, 500);
}
