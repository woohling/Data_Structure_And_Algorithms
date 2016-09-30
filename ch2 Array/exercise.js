/**
 * Created by wuhuiling on 2016/9/30.
 */

//1
function Grades() {
    this.grades = [];
    this.average = getAverage;
    this.add = add;
}

function getAverage() {
    var total = 0;
    for (var i = 0; i < this.grades.length; i++) {
        total += this.grades[i];
    }
    var average = total / this.grades.length;
    return average;
}

function add(grade) {
    this.grades.push(grade);
}

var studentA = new Grades();
studentA.add(98);
studentA.add(68);
studentA.add(88);

var average = studentA.average().toFixed(2);
console.log(average);
