var Hash = require('./hash');
var someNames = ["David", "Jennifer", "Donnie", "Raymond",
    "Cynthia", "Mike", "Clayton", "Danny", "Jonathan"];

var hashTable = new Hash();
hashTable.buildChains();

someNames.forEach(name => {
    hashTable.put(name);
});

hashTable.showDistro();