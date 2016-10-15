// 1. Modify the Queue class to create a Deque class. A deque is a queue-like structure that allows elements to
// be added and removed from both the front and the back of the list. Test your class in a program.
var Queue = require('./queue');
var deque = new Queue();
deque.addFront = addFront;
deque.addBack = addBack;
deque.removeFront = removeFront;
deque.removeBack = removeBack;

function addFront(element) {
    this.dataStore.unshift(element);
}

function addBack(element) {
    this.enqueue(element);
}

function removeFront() {
    return this.dequeue();
}

function removeBack() {
    return this.dataStore.pop();
}

// for (var i = 0; i < 5; i++) {
//     deque.enqueue(i);
// }
// console.log(deque.toString());
// deque.addFront(111);
// console.log(deque.toString());
// deque.removeFront();
// console.log(deque.toString());

// 2. Use the Deque class you created in Example 5-1 to determine if a given word is a palindrome.
var str = 'elle';
var reStr = '';

function palindrome(word) {
    for (var i = 0; i < word.length; i++) {
        deque.addBack(word[i]);
    }
    while (!deque.isEmpty()) {
        reStr += deque.removeBack();
    }
    if (reStr == word) {
        return true;
    }
    return false;
}

console.log(palindrome(str));

// 3. Modify the priority queue example from Example 5-5 so that the higher-priority elements have higher numbers
// rather than lower numbers. Test your implementation with the example in the chapter.


// 4. Modify the ED example (Example 5-5) so the user can control the activity in the ED. Create a menu system that
// allows the user to choose from the following activities:
//     a. Patient enters ED.
//     b. Patient is seen by doctor.
//     c. Display list of patients waiting to be seen.

function Patient(name, priority) {
    this.name = name;
    this.priority = priority;
}

var ED = new Queue();
var p = new Patient("Smith", 5);
ED.enqueue(p);
p = new Patient("Jones", 4);
ED.enqueue(p);
p = new Patient("Fehrenbach", 6);
ED.enqueue(p);
p = new Patient("Brown", 1);
ED.enqueue(p);
p = new Patient("Ingram", 1);
ED.enqueue(p);

