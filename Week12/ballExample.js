var balls = []; // We start with an array with just one element.
var gravity = 0.1;

function setup() {
  createCanvas(480, 240);
  // Initialize ball index 0
  balls.push(new Ball(50,0,32));
}

function draw() {
  background(51);

  // Update and display all balls
  for (var i = 0; i < balls.length; i ++ ) { // Whatever the length of that array, update and display all of the objects.
    balls[i].update();
    balls[i].display();
  }
}

function mousePressed() {
  // A new ball object
  var b = new Ball(mouseX,mouseY,32); // Make a new object at the mouse location.
  balls.push(b);
}

  // Ball constuctor
function Ball(tempX, tempY, tempW) {
  this.x = tempX;  // x location of square
  this.y = tempY;  // y location of square
  this.w = tempW;  // size
  this.speed = 0;  // speed

  this.display = function() {
    // Display the square
    fill(255,100);
    stroke(0);
    ellipse(this.x,this.y,this.w,this.w);
  }

  this.update = function() {
    // Add speed to location
    this.y = this.y + this.speed;

    // Add gravity to speed
    this.speed = this.speed + gravity;

    // If square reaches the bottom
    // Reverse speed
    if (this.y > height) {
      this.y = height;
      this.speed = this.speed * -0.95;
    }
  }
}
