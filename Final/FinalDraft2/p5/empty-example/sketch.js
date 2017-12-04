var movies;

var movieData = [];

var baseline = 500;

function preload() {
    movies = loadTable("../../assets/2017movies.csv", "csv", "header");
}

function setup() {

    createP("Top 25 Opening Weekend Box Office Movie Releases of 2017").addClass("title");
    createCanvas(1000, 1000);


    print(movies.getRowCount() + " total rows in table");
    print(movies.getColumnCount() + " total columns in table");

    print(movies.getColumn("movie"));



    for (var r = 0; r < movies.getRowCount(); r++) {


        movieData.push(new movie((20 + r * 30), 20, 200, 100000, ""));

        for (var c = 0; c < movies.getColumnCount(); c++) {
            //            print(movies.getString(r, c));

            if (c == 0) {
                movieData[r].title = movies.getString(r, c);
            }

            if (c == 1) {
                console.log(movies.getString(r, c));
                movieData[r].total = int(movies.getString(r, c));

                push(new totalText(movieData[r].total, (20 + r * 30), 400));


                //                createP(movieData[r].total).addClass("totals");
            }


        }

    }
}


function draw() {
    background(255);

    for (i in movieData) {

        movieData[i].display();
    }

    for (i in totalText) {

        totalText[i].display();
    }
    //    var num = 174000000;
    //    var dataMapped = map(num, 175000000, 35000000, height, 0);
    //    fill(0);
    //    rect(0, height - dataMapped, 10, height);
}

function movie(tempX, tempBoxWidth, tempColor, tempTotal, movieTitle) {
    this.x = tempX;
    this.boxWidth = tempBoxWidth;
    this.color = tempColor;
    this.total = tempTotal;
    this.title = movieTitle;

    this.display = function () {


        var dataMapped = map(this.total, 175000000, 35000000, baseline, 0);
        fill(this.color);

        rect(this.x, baseline - dataMapped, this.boxWidth, baseline);
        fill(0);
        push();
        translate(this.x, baseline - dataMapped);
        rotate(PI / 2);
        text(this.title, 0, 0);
        pop();

    }

}

function totalText(tempTotal, x, y) {

    this.display = function () {

        createP(tempTotal.addClass("totals"));
        tempTotal.position(this.x, this.y);
    }

}
