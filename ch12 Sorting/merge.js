/**
 * Created by EmmaWu on 2016/10/29.
 */

var CArray = require('./array');
var arr = new CArray();
arr.mergeSrot = mergeSort;

function mergeSort() {
    return mergeSortRec(this.dataStore);
}

function mergeSortRec(array) {
    var length = array.length;
    if (length === 1) {      //{1}
        return array;       //{2}
    }
    var mid = Math.floor(length / 2),
        left = array.slice(0, mid),
        right = array.slice(mid, length); //{5}
    return merge(mergeSortRec(left), mergeSortRec(right)); //{6} };
}

function merge(left, right) {
    var result = [];
    var iLeft = 0;
    var iRight = 0;

    while (iLeft < left.length && iRight < right.length) {
        if (left[iRight] < right[iLeft]) {
            result.push(left[iLeft ++]);
        } else {
            result.push(right[iRight ++]);
        }
    }
    while (iLeft < left.length) {
        result.push(left[iLeft++]);
    }
    while (iRight < right.length) {
        result.push(right[iRight++]);
    }
    return result; // {13}
}
