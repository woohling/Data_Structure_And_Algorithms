/**
 * Created by EmmaWu on 2016/10/12.
 */

import List from 'lists';

// 1. Write a function that inserts an element into a list only if the element to be inserted is larger than any of the
// elements currently in the list. Larger can mean either greater than when working with numeric values, or further down
// in the alphabet, when working with textual values.

var List1 = new List();
List1.append(1);
List1.append(2);
List1.append(3);
List1.append(4);
insertElement(5);
insertElement(3);

function insertElement(element) {
    for (List1.front(); List1.currPos() < List1.length();List1.next()) {
        if (element > List1.getElement()) {
            List1.append(element);
        }
    }
}

// 2. Write a function that inserts an element into a list only if the element to be inserted is smaller than any of the
// elements currently in the list.


// 3. Create a Person class that stores a person’s name and their gender. Create a list of at least 10 Person objects.
// Write a function that displays all the people in the list of the same gender.


// 4. Modify the video-rental kiosk program so that when a movie is checked out it is added to a list of rented movies.
// Display this list whenever a customer checks out a movie.

function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

var rentedMovies = new List();
var movieList = new List();

function checkOutMovie(name, movie, movieList, rentedMovies) {
    if (movieList.contains(movie)) {
        movieList.remove(movie);
        rentedMovies.append(movie);
        displayList(rentedMovies);
    }
}

function displayList(list) {

}

// 5. Create a check-in function for the video-rental kiosk program so that a returned movies is deleted from the rented
// movies list and is added back to the available movies list.

function checkInMovie(movie, movieList, rentedMovies) {
    if (rentedMovies.contains(movie)) {
        rentedMovies.remove(movie);
        movieList.append(movie);
    }
}