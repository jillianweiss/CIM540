var frameAmounts = 4;
var frameArray = [];
var currentImage = 0;


var interval = 1000;
var prevMillis = 0;


function preload() {
//    frameArray[0] = loadImage("assests/Thatwasclose0.jpg");
//    frameArray[1] = loadImage("assests/Thatwasclose1.jpg");
//    frameArray[2] = loadImage("assests/Thatwasclose2.jpg");
//    frameArray[3] = loadImage("assests/Thatwasclose3.jpg");
    
    for(var i = 0; i < 4; i++){
        var loadImageString = "assests/Thatwasclose" + i + ".jpg";
        frameArray[i] = loadImage(loadImageString);
    }
    
    
}

function setup() {
    createCanvas(500, 500);
    frameRate(60);
}

function draw() {
    
    
    console.log(millis());

    image(frameArray[currentImage], 0, 0);


    if (millis() - prevMillis >= interval) {
        prevMillis = millis();
        currentImage++; // Next frame
       
    }

    if (currentImage == frameArray.length) {
        currentImage = 0;
        // Return to first frame
    }

  
    ellipse(mouseX,mouseY, 100,100);


}
