var posX = 0;
var posY = 0;
var ballColor = "white";
var eyeColor = "black";
var mouthColor = "brown";
var buttonColor ="blue";
var noseColor = "orange";
var smBall = 120;
var lgBall = 180;
var bgColor = 0;

var buttonRedColor, buttonGreenColor, buttonBlueColor;


function setup(){
    
    createCanvas(1000,700);
    bgColor = color(179, 253, 255);
    

    posX = width/2;
    posY = height/2;
    
    var redText = createP("Red");
    buttonRedColor = createSlider(0, 255, 0);
    var greenText = createP("Green");
    buttonGreenColor = createSlider(0, 255, 0);
    var blueText = createP("Blue");
    buttonBlueColor = createSlider(0, 255, 0);
    
}

function draw(){
    
    background(bgColor);
    
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
    var eyeMoveX = map(mouseX, 0, width, -15, 15);
    var eyeMoveY = map(mouseY, 0, height, -15, 15);
    fill(eyeColor);
    ellipse(posX - 25 + eyeMoveX, posY - 20 + eyeMoveY, 15, 15);
    
    fill(eyeColor);
    ellipse(posX + 25 + eyeMoveX, posY - 20 + eyeMoveY, 15, 15);
    
    //Nose
    fill(noseColor);   
    triangle(posX - 30, posY + 10, posX, posY, posX, posY + 10);
    
    //Buttons
    fill(buttonRedColor.value(), buttonGreenColor.value(), buttonBlueColor.value());
    ellipse(posX, posY + 120, 20, 20);
    
    fill(buttonRedColor.value(), buttonGreenColor.value(), buttonBlueColor.value());
    ellipse(posX, posY + 150, 20, 20);
    
    fill(buttonRedColor.value(), buttonGreenColor.value(), buttonBlueColor.value());
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

function mousePressed(){
    
    bgColor = color(89, 251, 255);
    
}

function mouseReleased(){
    bgColor = bgColor = color(179, 253, 255);
}