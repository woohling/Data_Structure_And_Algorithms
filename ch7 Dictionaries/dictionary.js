/**
 * Created by EmmaWu on 2016/10/17.
 */

function Dictionary() {
    this.dataStore = new Array();
    this.add = add;
    this.find = find;
    this.remove = remove;
    this.showAll = showAll;
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
    console.log(this.dataStore);
    console.log(typeof this.dataStore);
    console.log(this.dataStore[0]);
    var keys = Object.keys(this.dataStore);
    keys.forEach(key => {
        console.log(key + '->' + this.find(key));
    });
}

module.exports = Dictionary;