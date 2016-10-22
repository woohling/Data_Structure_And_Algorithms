var Hash = require('./hash');
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

var hashTable = new Hash();

someNames.forEach(name => {
    hashTable.put(name);
});

hashTable.showDistro();