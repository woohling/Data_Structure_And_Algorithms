/**
 * Created by EmmaWu on 2016/10/27.
 */
function CArray(numElements) {
    this.dataStore = [];
    this.pos = 0;
    this.numElements = numElements;
    this.insert = insert;
    this.toString = toString;
    this.clear = clear;
    this.setData = setData;
    this.swap = swap;
    for (var i = 0; i < numElements; ++i) {
        this.dataStore[i] = i;
    }
    this.bubbleSort = bubbleSort;
    this.selectionSort = selectionSort;
    this.insertionSort = insertionSort;
}

function toString() {
    var retstr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retstr += this.dataStore[i] + " ";
        if (i > 0 && i % 10 == 0) {
            retstr += "\n";
        }
    }
    return retstr;
}

function clear() {
    for (var i = 0; i < this.dataStore.length; ++i) {
        this.dataStore[i] = 0;
    }
}


function insert(element) {
    this.dataStore[this.pos++] = element;
}

function setData() {
    for (var i = 0; i < this.numElements; ++i) {
        this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1));
    }
}

function swap(arr, index1, index2) {
    var temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
}

function bubbleSort() {
    for (var i = 0; i < this.dataStore.length; ++i) {
        for (var j = 0; j < this.dataStore.length - 1; ++j) {
            var currentItem = this.dataStore[j];
            var nextItem = this.dataStore[j + 1];
            if (currentItem > nextItem) {
                this.swap(this.dataStore, j, j + 1);
            }
        }
    }
    // improved version
    var length = this.dataStore.length;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length - 1 - i; j++) {
            if (this.dataStore[j] > this.dataStore[j + 1]) {
                this.swap(this.dataStore, j, j + 1);
            }
        }
    }
}

function selectionSort() {
    var length = this.dataStore.length;
    for (var i = 0; i < length - 1; i++) {
        var indexMin = i;
        for (var j = i; j < length; j++) {
            if (this.dataStore[j] < this.dataStore[i]) {
                indexMin = j;
            }
        }
        if (i !== indexMin) {
            this.swap(this.dataStore, i, indexMin);
        }
    }
}

function insertionSort() {
    var length = this.dataStore.length;
    var j;
    var temp;
    for (var i = 1; i < length; i++) {
        j = i;
        temp = this.dataStore[i];
        while (j > 0 && this.dataStore[j - 1] > temp) {
            this.dataStore[j] = this.dataStore[j - 1];
            j--;
        }
        this.dataStore[j] = temp;
    }
}

var length = 20;
var arr = new CArray(length);
arr.setData();
console.log(arr.toString());
arr.bubbleSort()
console.log(arr.toString());

module.exports = CArray;