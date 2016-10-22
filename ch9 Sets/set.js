/**
 * Created by EmmaWu on 2016/10/22.
 */

function Set() {
    this.dataStore = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.show = show;
    this.contains = contains;
    this.union = union;
    this.interset = interset;
    this.subset = subset;
}

function add(data) {
    if (this.dataStore.indexOf(data) < 0) {
        this.dataStore.push(data);
        return true;
    }
    return false;
}

function remove(data) {
    var pos = this.dataStore.indexOf(data);
    if (pos > -1) {
        this.dataStore.splice(pos, 1);
        return true;
    }
    return false;
}

function size() {
    return this.dataStore.length;
}

function show() {
    return this.dataStore;
}

function contains(data) {
    var pos = this.dataStore.indexOf(data);
    return pos > -1;
}

function union(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; i++) {
        tempSet.add(this.dataStore[i]);
    }
    for (var i = 0; i < set.dataStore.length; i++) {
        if (!tempSet.contains(set.dataStore[i])) {
            tempSet.dataStore.push(set.dataStore[i]);
        }
    }
    return tempSet;
}

function interset(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; i++) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

function subset(set) {
    if (this.size() > set.size()) {
        return false;
    }

    for (var i = 0; i < this.dataStore.length; i++) {
        if (!set.contains(this.dataStore[i])) {
            return false;
        }
    }
    return true;
}

function difference(Set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataStore.length; ++i) {
        if (!set.contains(this.dataStore[i])) {
            tempSet.add(this.dataStore[i]);
        }
    }
    return tempSet;
}

module.exports = Set;