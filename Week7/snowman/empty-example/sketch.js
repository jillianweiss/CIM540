var posX = 0;
var posY = 0;
var ballColor = "white";
var eyeColor = "black";
var mouthColor = "brown";
var buttonColor ="blue";
var noseColor = "orange";
var smBall = 120;
var lgBall = 180;


function setup(){
    createCanvas(1000,700);
    background(179, 253, 255);

    posX = width/2;
    posY = height/2;
    
}

function draw(){
    
    console.log("mouseX: " + mouseX + " mouseY: " + mouseY);
    
    posX = mouseX;
    posY = mouseY;
    
    strokeWeight(0);
    //Smaller Snowball
    fill(ballColor);
    ellipse(posX, posY, smBall, smBall);
    
    //Bigger Snowball
    fill(ballColor);
    ellipse(posX, posY + 150, lgBall, lgBall);
    
    //Eyes
    fill(eyeColor);
    ellipse(posX - 30, posY - 20, 10, 10);
    
    fill(eyeColor);
    ellipse(posX + 30, posY - 20, 10, 10);
    
    //Nose
    fill(noseColor);
    triangle(posX - 30, posY + 10, posX, posY, posX, posY + 10);
    
    //Buttons
    fill(buttonColor);
    ellipse(posX, posY + 120, 20, 20);
    
    fill(buttonColor);
    ellipse(posX, posY + 150, 20, 20);
    
    fill(buttonColor);
    ellipse(posX, posY + 180, 20, 20);
    
    //Mouth
    fill(mouthColor);
    ellipse(posX, posY + 40, 5, 5);
    
    fill(mouthColor);
    ellipse(posX - 12, posY + 35, 5, 5);
    
    fill(mouthColor);
    ellipse(posX + 12, posY + 35, 5, 5);
    
    fill(mouthColor);
    ellipse(posX - 20, posY + 25, 5, 5);
    
    fill(mouthColor);
    ellipse(posX + 20, posY + 25, 5, 5);

}