var movies;

var movieData = [];


function preload() {
    movies = loadTable("../../assets/2017movies.csv", "csv", "header");
}

function setup() {
    createCanvas(1000, 500);

    //    var red = random(0, 255);
    //    var green = random(0, 255);
    //    var blue = random(0, 255);


    print(movies.getRowCount() + " total rows in table");
    print(movies.getColumnCount() + " total columns in table");

    print(movies.getColumn("movie"));



    for (var r = 0; r < movies.getRowCount(); r++) {


        movieData.push(new movie((r * 30), 20, random(255), random(255), random(255), 100000));

        console.log(movie.color);

        for (var c = 0; c < movies.getColumnCount(); c++) {
            print(movies.getString(r, c));
            if (c == 1) {
                console.log(movies.getString(r, c));
                movieData[r].total = int(movies.getString(r, c));
            }
        }

    }
}


function draw() {
    background(255);

    for (i in movieData) {

        movieData[i].display();
    }
    //    var num = 174000000;
    //    var dataMapped = map(num, 175000000, 35000000, height, 0);
    //    fill(0);
    //    rect(0, height - dataMapped, 10, height);
}

function movie(tempX, tempBoxWidth, tempR, tempG, tempB, tempTotal) {
    this.x = tempX;
    this.boxWidth = tempBoxWidth;
    this.r = tempR;
    this.g = tempG;
    this.b = tempB;
    this.total = tempTotal;

    var color = fill(tempR, tempG, tempB);

    this.display = function () {
        color;

        //var mappedHeight = map()

        var dataMapped = map(this.total, 175000000, 35000000, height, 0);
        fill(0);
        rect(0, height - dataMapped, 10, height);

        rect(this.x, height - dataMapped, this.boxWidth, height);

    }

}
