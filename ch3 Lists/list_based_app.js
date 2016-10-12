
const fs = require('fs');
var movies;

fs.readFile('films.txt', function (err, data) {
    if (err) {
        throw err;
    }
    movies = data.toString().split('\n');
    console.log(movies);
    movies = Array.prototype.slice.call(movies);
    console.log(typeof movies);
    console.log(typeof movies[0]);
});
