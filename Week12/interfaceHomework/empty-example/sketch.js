var buttons = [];
var pictures = [];


function preload() {
    var img1 = loadImage("assets/u.jpg");
    var img2 = loadImage("assets/sac.jpg");
    var img3 = loadImage("assets/library.jpg");
    var img4 = loadImage("assets/healthcenter.jpg");

}

function setup() {

    createCanvas(400, 400);

    buttons.push(new button(100, 300, 50, "pink", text("back", 110, 300)));
    buttons.push(new button(300, 300, 50, "pink", text("next", 310, 300)));

    pictures.push(new picture(100, 50, 100, img1));
    pictures.push(new picture(100, 50, 100, img2));
    pictures.push(new picture(100, 50, 100, img3));
    pictures.push(new picture(100, 50, 100, img4));



}

function draw() {
    buttons[0].display();
    buttons[1].display();

    pictures[0].display();



}

function mousePressed() {


    if (buttons[1].check() == true) {


    }

    if (buttons[0].check() == true) {
        new picture()


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

function picture(tempX, tempY, tempSize, tempImage) {
    this.x = tempX;
    this.y = tempY;
    this.picSize = tempSize;
    this.image = tempImage;

    this.display = function () {
        image(this.image, this.x, this.y, this.picSize, this.picSize);
    }
}
