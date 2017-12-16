var movies;

var movieData = [];

var buttons = [];



function preload() {
    movies = loadTable("../../assets/2017movies.csv", "csv", "header");
}

function setup() {

    createP("Top 25 Opening Weekend Box Office Movie Releases of 2017").addClass("title");
    //canvas is 1000x1000px
    createCanvas(1100, 800);

    createP("Click on the pink box to view the movies by Production Company.").addClass("instructions");
    createP("Fuscia is Diseny. Green is Warner Brothers. Blue is Sony. Orange is Universal. Purple is 20th Century Fox. Yellow is Paramount. Indigo is Lionsgate.").addClass("key");

    createP("Click on the green box to view the movies by Season.").addClass("instructions");
    createP("Green is Summer. Yellow is Summer. Orange is Fall. Blue is Winter.").addClass("key");

    buttons.push(new button(20, 700, 50, "pink"));
    buttons.push(new button(100, 700, 50, "green"));




    print(movies.getRowCount() + " total rows in table");
    print(movies.getColumnCount() + " total columns in table");

    print(movies.getColumn("movie"));


    //cycle through rows of the cvs file
    for (var r = 0; r < movies.getRowCount(); r++) {

        //for every row, create a new movie bar
        movieData.push(new movie((50 + r * 42), 30, color(226, 222, 226), 100000, ""));

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



        //                createP(movieData[r].total).addClass("totals");
    }

}



function draw() {
    background(255);

    strokeWeight(3);
    line(35, 0, 35, 600);
    line(35, 600, 1100, 600);

    for (i in movieData) {

        movieData[i].display();
    }

    for (i in buttons) {

        buttons[i].display();
    }

    //    for (i in movieData) {
    //
    //        console.log(movieData[i].company);
    //    }

    //    var num = 174000000;
    //    var dataMapped = map(num, 175000000, 35000000, height, 0);
    //    fill(0);
    //    rect(0, height - dataMapped, 10, height);
}

function movie(tempY, tempBoxHeight, tempColor, tempTotal, movieTitle) {
    this.y = tempY;
    this.boxHeight = tempBoxHeight;
    this.setFill = tempColor;
    this.total = tempTotal;
    this.title = movieTitle;
    this.hovering = false;

    this.display = function () {

        fill(this.setFill);
        var dataMapped = map(this.total, 35000000, 175000000, 200, 1000);

        strokeWeight(1);
        rect(35, dataMapped, 1000 - dataMapped, 50);
        //        fill(0);
        //        push();
        //        translate(this.y + 5, 605 - dataMapped);
        //        rotate(PI / 2);
        //        text(this.title, 0, 0);
        //        pop();

        if (this.hovering == true) {
            console.log("hovering");

        }
    }

    this.check = function () {
        if (mouseX > this.x && mouseX < (this.x + this.boxWidth)) {
            this.hovering = true;
        } else {
            this.hovering = false;
        }
    }
}



function yAxis(tempX, tempY, tempText) {
    this.x = tempX;
    this.y = tempY;
    this.text = tempText;

    this.display = function () {
        text(this.title, this.x, this.y);
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
