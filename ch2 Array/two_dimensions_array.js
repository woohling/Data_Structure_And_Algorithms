/**
 * Created by EmmaWu on 2016/9/29.
 */
var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89], [91, 94, 80]];
// var grades = [[89, 77, 78],[76, 82, 81],[91, 94, 89]];
var total = 0;
var average = 0.0;
for(var row = 0; row < grades.length; ++row) {
    for(var column = 0; column < grades[row].length; ++column) {
        total += grades[row][column];
    }
    average = total / grades[row].length;
    console.log('student '+ (row + 1) + ':' + average);
    average = 0;
    total = 0;
}


//row wise example: seems to be wrong
for (var col = 0; col < grades.length; ++col) {
    for (var row = 0; row < grades[col].length; ++row) {
        total += grades[row][col];
    }
    average = total / grades[col].length;
    console.log("Test " + parseInt(col+1) + " average: " +
        average.toFixed(2));
    total = 0;
    average = 0.0;
}

//row wise
var studentAmount = grades[0].length;
console.log(grades.length);
for(var col = 0; col < studentAmount; col ++) {
    for (var row = 0; row < grades.length; row ++) {
        total += grades[row][col];
    }
    average = total / grades.length;
    console.log("Student " + parseInt(col+1) + " average: " +
        average.toFixed(2));
    total = 0;
    average = 0.0;
}

//jagged array --- the same as before
var jaggedGrades = [[89, 77], [88, 69, 89], [88, 69, 78, 89], [69, 89]];
for(var row = 0; row < jaggedGrades.length; ++row) {
    for(var column = 0; column < jaggedGrades[row].length; ++column) {
        total += jaggedGrades[row][column];
    }
    average = total / jaggedGrades[row].length;
    console.log('student '+ (row + 1) + ':' + average);
    average = 0;
    total = 0;
}


