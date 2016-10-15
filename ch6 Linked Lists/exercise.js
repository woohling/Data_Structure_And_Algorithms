var node = require('./node');
var LList = node.LList;

// 1. Implement the advance(n) function so that when executed, the current node is moved n nodes forward in the list.
var test1 = new LList();
test1.advance = advance;

function advance(item, n) {
    var curNode = this.find(item);
    for (var i = 0; i < n; i++) {
        var previousNode = this.findPrevious(item);
        var nextNode = curNode.next;
        var nextNextNode;
        if (nextNode!==null) {
            nextNextNode = nextNode.next;
            previousNode.next = nextNode;
            nextNode.next = curNode;
            curNode.next = nextNextNode;
        }
    }
}

test1.insert('1', 'head');
test1.insert('2', '1');
test1.insert('3', '2');
test1.insert('4', '3');
test1.insert('5', '4');
// test1.display();
test1.advance('4', 2);
console.log();
// test1.display();

// 2. Implement the back(n) function so that when executed, the current node is moved n spaces backward in the list.
var test2 = new LList();
test2.back = back;

function back(item, n) {
    var curNode = this.find(item);
    for (var i = 0; i < n; i++) {
        var nextNode = curNode.next;
        var previousNode = this.findPrevious(item);
        var previousPreviousNode;
        if (previousNode.element !== 'head') {
            previousPreviousNode = this.findPrevious(previousNode.element);
            previousNode.next = nextNode;
            curNode.next = previousNode;
            previousPreviousNode.next = curNode;
        }
    }
}
test2.insert('1', 'head');
test2.insert('2', '1');
test2.insert('3', '2');
test2.insert('4', '3');
test2.insert('5', '4');
test2.display();
test2.back('2', 4);
console.log();
test2.display();

// 3. Implement the show() function, which displays the data associated with the current node.
var test3 = new LList();
test3.show = show;

function show(item) {
    var found = this.find(item);
    console.log(found.element);
}

// 4. Write a program that uses a singly linked list to keep track of a set of test grades entered interactively into the program.
var gradeList = new LList();
gradeList.insert('62', 'head');
gradeList.insert('87', '62');
gradeList.insert('78', '87');

// 5. Rewrite your solution to Example 6-4 using a doubly linked list.
//--already done.. and fix some bugs that it originally has..

// 6. According to legend, the first-century Jewish historian Flavius Josephus was about to be captured along with a
// band of 40 compatriots by Roman soldiers during the Jewish-Roman War. The Jewish soldiers decided that they preferred
// suicide to being captured and devised a plan for their demise. They were to form a circle and kill every third soldier
// until they were all dead. Josephus and one other decided they wanted no part of this and quickly calculated where they
// needed to place themselves so they would be the last survivors. Write a program that allows you to place n people in
// a circle and specify that every mth person will be killed. The program should determine the number of the last two people
// left in the circle. Use a circularly linked list to solve the problem.

var CircleList = require('./circularLinked');
var circleList = new CircleList();

function circularly(n, mth) {

}