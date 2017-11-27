var movieArray = [];

function setup() {
    createCanvas(1000, 1000);

    movieArray.push(new movie(10, ))
}

function draw() {


}


function movie(tempX, tempY, tempBarSize, tempColor) {
    this.x = tempX;
    this.y = tempY;
    this.barWidth = tempBarWidth;
    this.barHeight = tempBarHeight;
    this.setFill = tempColor;

    this.display = function () {
        fill(this.setFill);
        rect(this.x, this.y, this.barWidth, this.barHeight);
    }
}
