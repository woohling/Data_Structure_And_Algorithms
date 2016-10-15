/**
 * Created by EmmaWu on 2016/10/15.
 */

function Node(element) {
    this.element = element;
    this.next = null;
}

function LList() {
    this.head = new Node('head');
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.remove = remove;
    this.findPrevious = findPrevious;
}

function find(item) {
    var curNode = this.head;
    while (curNode.element != item) {
        curNode = curNode.next;
    }
    return curNode;
}

function findPrevious(item) {
    var curNode = this.head;
    while ((curNode.next != null) && curNode.next.element != item) {
        curNode = curNode.next;
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
    while(currentNode.next != null) {
        console.log(currentNode.next.element);
        currentNode = currentNode.next;
    }
}

module.exports = {
    Node: Node,
    LList: LList
};
