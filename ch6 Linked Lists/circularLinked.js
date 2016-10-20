/**
 * Created by EmmaWu on 2016/10/15.
 */

function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node('head');
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findPrevious = findPrevious;
    this.length = length;
}

function length() {
    var count = 0;
    var curNode = this.head;
    while (curNode.next && (curNode.next.element !== 'head')) {
        count ++;
        curNode = curNode.next;
    }
    return count;
}

function find(item) {
    var curNode = this.head;
    while (curNode.element != item) {
        curNode = curNode.next;
        if (curNode.element == 'head') break;
    }
    return curNode;
}

function findPrevious(item) {
    var curNode = this.head;
    while ((curNode.next != null) && curNode.next.element != item) {
        curNode = curNode.next;
        if (curNode.element == 'head') {
            curNode = null;
            break;
        }
    }
    return curNode;
}

function remove(element) {
    var found = this.findPrevious(element);
    if (found.next !== null) {
        found.next = found.next.next;
    }
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function display() {
    var currentNode = this.head;
    while((currentNode.next !== null) && (currentNode.next.element != 'head')) {
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
    }
}

// var test = new LList();
// test.insert('hello', 'head');
// test.insert('hello2', 'hello');
// test.insert('hello3', 'hello2');
// test.insert('hello4', 'hello3');
// test.display();
// test.remove('hello2');
// test.display();

module.exports = LList;
