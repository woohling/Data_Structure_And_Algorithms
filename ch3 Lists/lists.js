/**
 * Created by EmmaWu on 2016/10/9.
 */

function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = [];
    this.clear = clear;
    this.find = find;
    this.toString = toString;
    this.insert = insert;
    this.append = append;
    this.remove = remove;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
}

function append(element) {
    // this.dataStore.push(element);
    // this.listSize ++;
    // from the book:
    this.dataStore[this.listSize++] = element;
}

function length() {
    return this.listSize;
}

function remove(element) {
    var found = this.find(element);
    if (found > -1) {
        this.dataStore.splice(found, 1);
        this.listSize--;
        return true;
    }
    return false;
}

function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (this.dataStore[i] === element) {
            return i;
        }
    }
    return -1;
}

function toString() {
    return this.dataStore;
}

function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos + 1, 0, element);
        this.listSize++;
        return true;
    }
    return false;
}

function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.pos = 0;
    this.listSize = 0;
}

function contains(element) {
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] === element) {
            return true;
        }
    }
    return false;

    //my function:
    // return this.find(element) > -1;
}

function front() {
    this.pos = 0;
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    //my function
    // if (this.pos > 0) {
    //     this.pos = this.pos - 1;
    // } else {
    //     this.pos = 0;
    // }
    if (this.pos > 0) {
        --this.pos;
    }
}

function currPos() {
    return this.pos;
}

function next() {
    if (this.pos < this.listSize - 1) {
        ++this.pos;
    }
}

function getElement() {
    return this.dataStore[this.pos];
}

function moveTo(pos) {
    this.pos = pos;
}

var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");

names.front();
console.log(names.getElement());
names.moveTo(2);
console.log(names.getElement());

