var movies;

function preload() {
    movies = loadTable("../../assets/2017movies.csv", "csv", "header");
}

function setup() {
    createCanvas(1000, 1000);

    print(movies.getRowCount() + " total rows in table");
    print(movies.getColumnCount() + " total columns in table");

    print(movies.getColumn("movie"));

    for (var r = 0; r < movies.getRowCount(); r++) {
        for (var c = 0; c < movies.getColumnCount(); c++) {
            print(movies.getString(r, c));
        }
    }
}


function draw() {


}

function movie() {

}
