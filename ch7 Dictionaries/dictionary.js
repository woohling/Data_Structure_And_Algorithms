/**
 * Created by EmmaWu on 2016/10/17.
 */

function Dictionary() {
    this.dataStore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
    this.count = count;
    this.clear = clear;
    this.sort = sort;
    this.setValue = setValue;
}

function add(key, value) {
    this.dataStore[key] = value;
}

function find(key) {
    return this.dataStore[key];
}

function remove(key) {
    delete this.dataStore[key];
}

function showAll() {
    var keys = Object.keys(this.dataStore);
    keys.forEach(key => {
        console.log(key + '->' + this.find(key));
    });
}

function count() {
    var n = 0;
    var keys = Object.keys(this.dataStore);
    return keys.length;
    //
    // keys.forEach(key => ++n);
    // return n;
}

function clear() {
    var keys = Object.keys(this.dataStore);
    keys.forEach(key => {
        delete this.dataStore[key];
    });

    // this.dataStore = new Array();
}

function sort() {
    var keys = Object.keys(this.dataStore).sort();
    keys.forEach(key => {
        console.log(key + '->' + this.find(key));
    });
}

function setValue(key, value) {
    this.dataStore[key] = value;
}

module.exports = Dictionary;