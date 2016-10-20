/**
 * Created by EmmaWu on 2016/10/17.
 */

var Dictionary = require('./dictionary');

var newDic = new Dictionary();
newDic.add('new', 'book');
newDic.add('new2', 'book2');
newDic.showAll();
console.log(newDic.count());

var pBook = new Dictionary();
pBook.add("Raymond", "123");
pBook.add("David", "345");
pBook.add("Cynthia", "456");
pBook.setValue('Cynthia', 'Cynthia');
// console.log("Number of entries: " + pBook.count());
// console.log("David's extension: " + pBook.find("David"));
pBook.showAll();
pBook.sort();
// pBook.clear();
// console.log("Number of entries: " + pBook.count());
