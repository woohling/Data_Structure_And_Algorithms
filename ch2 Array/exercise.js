"use strict";
//1 Create a grades object that stores a set of student grades in an object. Provide a function for adding a grade and
// a function for displaying the student’s grade average.


//2 Store a set of words in an array and display the contents both forward and backward

var words = ['hello', 'world', 'emma', 'joyce', 'john'];
console.log(words);
console.log(words.reverse());

//3  Modify the weeklyTemps object in the chapter so that it stores a month’s worth of data using a two-dimensional array.
// Create functions to display the monthly average, a specific week’s average, and all the weeks’ averages.

function WeekTemps() {
    this.dataStore = [];
    this.dataCount = 0;
    this.add = add;
    this.monthlyAverage = monthlyAverage;
    this.allWeeksAverage = allWeeksAverage;
    this.weekAverage = weekAverage;
}

function weekAverage(week) {
    if (!week) return;
    var weekArray = this.dataStore[week - 1];
    var total = 0;
    for (var i = 0; i < weekArray.length; i++) {
        total += weekArray[i];
    }
    var average = total / weekArray.length;
    console.log(average);
    return average;
}

function allWeeksAverage() {
    for (var i = 0; i < this.dataStore.length; i++) {
        var total = 0;

        for (var j = 0; j < this.dataStore[i].length; j++) {
            total += this.dataStore[i][j];
        }
        var average = total / this.dataStore[i].length;
        console.log('week ' + (i+1) + ' average: ' + average);
        average = 0;
        total = 0;
    }
}

function monthlyAverage() {
    var total = 0;
    for (var i = 0; i < this.dataStore.length; i++) {
        for (var j = 0; j < this.dataStore[i].length; j++) {
            total += this.dataStore[i][j];
        }
    }
    var average = total / this.dataCount;
    console.log(average);
    return average;
}

function add(data) {
    let weekAmount = parseInt(this.dataCount / 7);
    let isWholeWeek = (this.dataCount % 7 === 0);
    if (isWholeWeek) {
        this.dataStore[weekAmount] = [];
    }
    this.dataStore[weekAmount].push(data);
    this.dataCount ++;
}

var weekTemps = new WeekTemps();

for (var i = 1; i < 32; i ++) {
    weekTemps.add(i);
}
weekTemps.monthlyAverage();
weekTemps.weekAverage(2);
weekTemps.allWeeksAverage();
console.log(weekTemps.dataStore);

//4 Create an object that stores individual letters in an array and has a function for displaying the letters as a single word.

var letters = ['h', 'e', 'l', 'l', 'o'];

function toWord(letters) {
    let word = '';
    letters.forEach(letter => {
        word += letter;
    });
    console.log(word);
    return word;
}

let word = toWord(letters);