var interfaceItems = [];
var brushWidth = 10;
var brushHeight = 10;

var buttonRedColor, buttonGreenColor, buttonBlueColor;



function setup() {
    createCanvas(400, 400);

    interfaceItems.push(new interface(100, 100, 50, color(0, 255, 0)));
    interfaceItems.push(new interface(200, 100, 50, color(255, 0, 0)));
    interfaceItems.push(new interface(100, 200, 50, color(0, 0, 255)));
    interfaceItems.push(new interface(200, 200, 50, color(255, 255, 0)));


    var redText = createP("Red");
    buttonRedColor = createSlider(0, 255, 0);
    var greenText = createP("Green");
    buttonGreenColor = createSlider(0, 255, 0);
    var blueText = createP("Blue");
    buttonBlueColor = createSlider(0, 255, 0);

}

function draw() {

    fill(buttonRedColor.value(), buttonGreenColor.value(), buttonBlueColor.value());
    ellipse(mouseX, mouseY, brushWidth, brushHeight);
    interfaceItems[0].display();
    interfaceItems[1].display();
    interfaceItems[2].display();
    interfaceItems[3].display();
    // console.log(interfaceItems[0].check());

    if (interfaceItems[0].check() == true) {
        interfaceItems[0].overlay = true;
    } else {
        interfaceItems[0].overlay = false;
    }

}

function mousePressed() {
    if (interfaceItems[0].check() == true) {
        brushWidth++;
    }

    if (interfaceItems[1].check() == true) {
        brushWidth--;
    }

    if (interfaceItems[2].check() == true) {
        brushHeight++;
    }

    if (interfaceItems[3].check() == true) {
        brushHeight--;
    }

}

function interface(tempX, tempY, tempBoxSize, tempColor) {
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempBoxSize;
    this.setFill = tempColor;
    this.overlay = false;


    this.display = function () {

        fill(this.setFill);
        rect(this.x, this.y, this.boxSize, this.boxSize);

        if (this.overlay == true) {
            fill(127);
            rect(this.x, this.y, this.boxSize, this.boxSize);
        }
    }

    this.check = function () {
        if (mouseX > this.x && mouseX < this.x + this.boxSize && mouseY > this.y && mouseY < this.y + this.boxSize) {
            this.overlay = true;
            return true;
        } else {
            this.overlay = false;
            return false;
        }
    }

}
