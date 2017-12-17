var movies;

var movieData = [];

var buttons = [];




function preload() {
    movies = loadTable("../../assets/2017movies.csv", "csv", "header");
    fontRegular = loadFont("../../assets/Raleway-Regular.ttf");
    fontBold = loadFont("../../assets/Raleway-Bold.ttf");

}

function setup() {

    createP("Top 25 Opening Weekend Box Office Movie Releases of 2017").addClass("title");

    //canvas is 1100x800px
    createCanvas(1100, 800);


    createP("Click on the pink box to view the movies by <b>Production Company</b>.").addClass("company");
    createP("Fuscia is Disney. Green is Warner Brothers. Blue is Sony. Orange is Universal. Purple is 20th Century Fox. Yellow is Paramount. Indigo is Lionsgate.").addClass("company");

    createP("Click on the green box to view the movies by <b>Season</b>.").addClass("season");
    createP("Green is Summer. Yellow is Summer. Orange is Fall. Blue is Winter.").addClass("season");

    createP("Click on the gray box to <b>return</b> to the original color.").addClass("return");


    buttons.push(new button(425, 700, 50, color(255, 140, 243)));
    buttons.push(new button(525, 700, 50, color(0, 177, 16)));
    buttons.push(new button(625, 700, 50, color(226, 222, 226)));




    print(movies.getRowCount() + " total rows in table");
    print(movies.getColumnCount() + " total columns in table");

    print(movies.getColumn("movie"));


    //cycle through rows of the csv file
    for (var r = 0; r < movies.getRowCount(); r++) {

        //for every row, create a new movie bar
        movieData.push(new movie((65 + r * 40), 30, color(226, 222, 226), 100000, ""));

        //cycle through the columns of each row
        for (var c = 0; c < movies.getColumnCount(); c++) {
            //            print(movies.getString(r, c));
            //at column zero, retrieve the string which is the movie title
            if (c == 0) {
                movieData[r].title = movies.getString(r, c);
            }
            //at every column 1, retreive the number which is the movie total in the box office
            if (c == 1) {
                //                console.log(movies.getString(r, c));
                movieData[r].total = int(movies.getString(r, c));
            }

            if (c == 2) {
                movieData[r].month = int(movies.getString(r, c));
            }

            if (c == 4) {
                movieData[r].company = movies.getString(r, c);
                //                console.log(movieData[r].company);
            }
        }

    }

}



function draw() {
    background(255);

    strokeWeight(3);
    line(50, 5, 50, 600);
    line(50, 600, 1100, 600);

    for (i in movieData) {

        movieData[i].display();
    }

    for (i in buttons) {

        buttons[i].display();
    }

    //Y Axis
    fill(0, 0, 0);
    textFont(fontRegular);
    text("$200M", 10, 15);
    text("$150M", 10, 140);
    text("$100M", 10, 270);
    text("$50M", 15, 415);
    text("$0M", 20, 600);

    text("source: www.boxofficemojo.com", 470, 630);

}

function movie(tempX, tempBoxWidth, tempColor, tempTotal, movieTitle) {
    this.x = tempX;
    this.boxWidth = tempBoxWidth;
    this.setFill = tempColor;
    this.total = tempTotal;
    this.title = movieTitle;

    this.display = function () {

        fill(this.setFill);
        var dataMapped = map(this.total, 35000000, 200000000, 150, 600);

        strokeWeight(2);
        rect(this.x, 600 - dataMapped, this.boxWidth, dataMapped);
        fill(0);
        push();
        translate(this.x + 18, 595);
        angleMode(DEGREES);
        rotate(270);
        textFont(fontBold);
        text(this.title, 0, 0);
        pop();

        push();
        translate(this.x + 10, 595 - dataMapped);
        angleMode(DEGREES);
        rotate(320);
        textFont(fontRegular);
        text("$" + this.total, 0, 0);
        pop();
    }

}



function mousePressed() {
    if (buttons[0].check() == true) {
        for (i in movieData) {
            if (movieData[i].company == "Disney") {
                movieData[i].setFill = color(255, 51, 204);
            }
            if (movieData[i].company == "Warner Bros") {
                movieData[i].setFill = color(153, 255, 153);
            }
            if (movieData[i].company == "Sony") {
                movieData[i].setFill = color(51, 204, 255);
            }
            if (movieData[i].company == "Universal") {
                movieData[i].setFill = color(255, 153, 0);
            }
            if (movieData[i].company == "Fox") {
                movieData[i].setFill = color(204, 153, 255);
            }
            if (movieData[i].company == "Lionsgate") {
                movieData[i].setFill = color(102, 102, 255);
            }
            if (movieData[i].company == "Paramount") {
                movieData[i].setFill = color(255, 255, 102);
            }
        }

    }

    if (buttons[1].check() == true) {
        for (i in movieData) {
            if (movieData[i].month == 1 || movieData[i].month == 2 || movieData[i].month == 12) {
                movieData[i].setFill = color(0, 255, 255);
            }
            if (movieData[i].month == 3 || movieData[i].month == 4 || movieData[i].month == 5) {
                movieData[i].setFill = color(153, 255, 153);
            }
            if (movieData[i].month == 6 || movieData[i].month == 7 || movieData[i].month == 8) {
                movieData[i].setFill = color(255, 255, 0);
            }
            if (movieData[i].month == 9 || movieData[i].month == 10 || movieData[i].month == 11) {
                movieData[i].setFill = color(255, 102, 0);
            }
        }
    }

    if (buttons[2].check() == true) {
        for (i in movieData) {
            movieData[i].setFill = color(226, 222, 226);
        }

    }
}


function button(tempX, tempY, tempSize, tempColor) {
    this.x = tempX;
    this.y = tempY;
    this.boxSize = tempSize;
    this.setFill = tempColor;

    this.display = function () {
        fill(this.setFill);
        rect(this.x, this.y, this.boxSize, this.boxSize);
    }

    this.check = function () {
        if (mouseX > this.x && mouseX < (this.x + this.boxSize) && mouseY > this.y && mouseY < (this.y + this.boxSize)) {
            return true;
        } else {
            return false;
        }
    }
}
