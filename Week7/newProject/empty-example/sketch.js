var bgColor = "yellow";
var fSize = 200;
var posX = 0;
var posY = 0;

function setup(){
    createCanvas(1000, 500);
    background(bgColor);
    
    
    posX = width/2;
    posY = 100;
}


function draw(){
    strokeWeight(0);
    //Face
    fill("blue");
    ellipse(posX, posY, fSize, fSize);
    
    //Mouth
    fill("red");
    rect(posX - 50, posY + 50, 100, 20);
    
    //Eyes
    fill("white");
    ellipse(posX - 50, posY - 20, 20, 40);
    
    fill("white");
    ellipse(posX + 50, posY - 20, 20, 40);
    
    fill("black");
    ellipse(posX - 50, posY - 20, 20, 20);
    
    fill("black");
    ellipse(posX + 50, posY - 20, 20, 20);
    
    //Mouth Line
    stroke(125,0,0);
    strokeWeight(2);
    line(posX - 50, posY + 60, posX + 50, posY + 60);
    
    
    //Mole
    stroke("black");
    strokeWeight(5);
    point(posX + 20, posY + 20);
    
}