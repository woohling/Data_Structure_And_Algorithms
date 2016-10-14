/**
 * Created by EmmaWu on 2016/10/15.
 */
var Queue = require('./queue');
const fs = require('fs');
var femaleList = new Queue();
var maleList = new Queue();

function Dancer(name, gender) {
    this.name = name;
    this.gender = gender;
}

function getDancers() {
    var dancers;
    fs.readFile('dancers.txt', (err, data) => {
        dancers = data.toString().split('\n');

        for (var i = 0; i < dancers.length; ++i) {
            dancers[i] = dancers[i].trim();
        }

        for (var i = 0; i < dancers.length; ++i) {
            var dancer = dancers[i];
            dancer = dancer.split(' ');
            dancer = new Dancer(dancer[1] + ' ' + dancer[2], dancer[0]);
            if (dancer.gender == 'F') {
                femaleList.enqueue(dancer);
                // console.log(femaleList);
            } else {
                maleList.enqueue(dancer);
                // console.log(maleList);
            }
        }
        dance();
    });
}

function dance() {
    console.log('lets dance');
    var person;
    while (!femaleList.isEmpty() && !maleList.isEmpty()) {
        person = femaleList.dequeue();
        console.log('female dancer: ' + person.name);
        person = maleList.dequeue();
        console.log('male dancer: ' + person.name);
    }
}

getDancers();
