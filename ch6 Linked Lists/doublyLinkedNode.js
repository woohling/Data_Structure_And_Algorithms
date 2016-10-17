/**
 * Created by EmmaWu on 2016/10/15.
 */

function Node(element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.remove = remove;
    this.display = display;
    this.findLast = findLast;
    this.displayReverse = displayReverse;
}

function findLast() {
    var currNode = this.head;
    while (currNode.next !== null) {
        currNode = currNode.next;
    }
    return currNode;
}

function displayReverse() {
    var currNode = this.findLast();
    while (!(currNode.previous == null)) {
        console.log(currNode.element);
        currNode = currNode.previous;
    }
}

function display() {
    var currentNode = this.head;
    while (currentNode.next != null) {
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
    }
}

function find(item) {
    var currNode = this.head;
    while (currNode && currNode.element != item) {
        currNode = currNode.next;
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var currentNode = this.find(item);
    var nextNode = currentNode.next;

    newNode.next = nextNode;
    currentNode.next = newNode;

    newNode.previous = currentNode;
    if (nextNode) {
        nextNode.previous = newNode;
    }
}

function remove(item) {
    var currentNode = this.find(item);
    var previousNode = currentNode.previous;
    if (currentNode.next != null) {
        previousNode.next = currentNode.next;
        currentNode.next.previous = previousNode;
        currentNode.next = null;
        currentNode.previous = null;
    }
}

module.exports = LList;
