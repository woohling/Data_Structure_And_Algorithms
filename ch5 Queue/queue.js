/**
 * Created by EmmaWu on 2016/10/13.
 */
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue= dequeue;
    this.toString = toString;
    this.front = front;
    this.back = back;
    this.isEmpty = isEmpty;
}

function enqueue(element) {
    this.dataStore.push(element);
}

function dequeue() {
    this.dataStore.shift(element);
}

function front() {
    return this.dataStore[0];
}

function back() {
    return this.dataStore[this.dataStore.length - 1];
}

function toString() {
    var str = '';
    for (var i = 0; i < this.dataStore.length; i++) {
        str += this.dataStore[i] + '\n';
    }
    return str;
}

function isEmpty() {
    return this.dataStore.length === 0;
}

var queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.toString());