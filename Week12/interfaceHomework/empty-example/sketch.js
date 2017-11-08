var balls = [];
var gravity = 0.5;

function setup(){
  createCanvas(400, 400);

}

function draw() {
  background(0);

  for (var i = 0; i < balls.length; i ++){
    balls[i].moreBalls();
    balls[i].display();
  }
}

function mousePressed(){

  balls.push(new ball(mouseX, mouseY, 20, 20));

}

function ball(tempX, tempY, 20){
  this.x = tempX;
  this.y = tempY;
  this.speed = 0;

  this.display = function(){

    fill("white");
    ellipse(this.x, this.y, 20, 20);
  }

  this.moreBalls = function(){

    this.y = this.y + this.speed;

    this.speed = this.speed + gravity;

    if (this.y > height) {
      this.y = height;
      this.speed = this.speed * -0.95;
    }
  }
}
