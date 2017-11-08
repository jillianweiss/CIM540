var pics = [];

//var ball = ["football", "basketball", "soccer"];

var targetPosX = [100, 300, 500];

var targetPosY = 100;

//var overlayArray = [false, false, false];

var currentPos = -1;
var answer = 2;

function setup() {
    createCanvas(600, 400);
    pics[0] = loadImage("assets/football.png");

    pics[1] = loadImage("assets/basketball.png");

    pics[2] = loadImage("assets/soccer.png");
}

function draw() {

    background(255);
    rectMode(CENTER);
    imageMode(CENTER);

    textSize(32);
    text("Find the soccer ball?", 50, 250);
    
    for(var i=0; i < targetPosX.length; i++){
        if (mouseX > targetPosX[i] - 100 && mouseX < targetPosX[i] + 100 && mouseY > targetPosY - 100 && mouseY < targetPosY + 100){
            image(pics[i], targetPosX[i], targetPosY);
            currentPos = i;
        }
        else {
            rect(targetPosX[i], 100, 200, 200);
            
        }
    }
    
    if(currentPos == answer){
        console.log("correct");
        text("You are correct", 10,300);
    }
    else if(currentPos < answer && currentPos >= 0){
        console.log("incorrect");
        text("You are incorrect", 10,300);
    }
    else{
        currentPos = -1;
    }
}