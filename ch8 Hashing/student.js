/**
 * Created by EmmaWu on 2016/10/22.
 */

var Hash = require('./hash');

var hashTable = new Hash();
var numStudents = 10;
var arrSize = 97;
var idLength = 9;
var students = new Array(numStudents);
getStuData(students);
console.log(students);

for (var i = 0; i < students.length; i++) {
    hashTable.put(students[i]);
}
hashTable.showDistro();

function getStuData(arr) {
    for (var i = 0; i < arr.length; ++i) {
        var num = "";
        for(var j=1;j<=9;++j){
            num += Math.floor(Math.random() * 10);
        }
        num += getRandomInt(50,100);
        arr[i] = num;
    }
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

