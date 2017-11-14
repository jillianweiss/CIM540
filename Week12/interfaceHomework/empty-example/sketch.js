var buttons = [];
var pictures = [];
//var pic = pictures[0];

function preload() {
    pictures.push(loadImage("assets/u.jpg"));
    pictures.push(loadImage("assets/sac.jpg"));
    pictures.push(loadImage("assets/library.jpg"));
    pictures.push(loadImage("assets/healthcenter.jpg"));

}

function setup() {

    createCanvas(400, 400);

    buttons.push(new button(100, 300, 50, "pink", text("back", 110, 300)));
    buttons.push(new button(300, 300, 50, "pink", text("next", 310, 300)));



}

function draw() {
    buttons[0].display();
    buttons[1].display();

    image(pictures[0], 100, 50, 100, 100);

}

function mousePressed() {
    if (buttons[0].check() == true) {
        image(pictures[3], 100, 50, 100, 100);


    }

    if (buttons[1].check() == true) {
        image(pictures[1], 100, 50, 100, 100);

    }

}

function button(tempX, tempY, tempSize, tempColor, tempText) {
    this.x = tempX;
    this.y = tempY;
    this.buttonSize = tempSize;
    this.color = tempColor;
    this.text = tempText;

    this.display = function () {
        fill(this.color);
        rect(this.x, this.y, this.buttonSize, this.buttonSize);
    }

    this.check = function () {
        if (mouseX > this.x && mouseX < this.x + this.buttonSize && mouseY > this.y && mouseY < this.y + this.buttonSize) {
            return true;
        } else {
            return false;
        }
    }

}
