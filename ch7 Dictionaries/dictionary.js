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
    this.dataStore.forEach(data => {
        console.log(data);
        for (var key in data) {
            console.log(key + '->' + data[key]);
        }
    });
}

module.exports = Dictionary;