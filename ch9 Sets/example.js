var Set = require('./set');

var names = new Set();
names.add("David");
names.add("Jennifer");
names.add("Cynthia");
names.add("Mike");
names.add("Raymond");
if (names.add("Mike")) {
    console.log("Mike added")
}
else {
    console.log("Can't add Mike, must already be in set");
}


var cis = new Set();
cis.add("Mike");
cis.add("Clayton");
cis.add("Jennifer");
cis.add("Raymond");
var dmp = new Set();
dmp.add("Raymond");
dmp.add("Cynthia");
dmp.add("Bryan");
var un = new Set();
un = cis.union(dmp);
console.log(un);

var it = new Set();
it.add("Cynthia");
it.add("Clayton");
it.add("Jennifer");
it.add("Danny");
it.add("Jonathan");
it.add("Terrill");
it.add("Raymond");
it.add("Mike");
var dmp = new Set();
dmp.add("Cynthia");
dmp.add("Raymond");
dmp.add("Jonathan");
dmp.add("Sh");
if (dmp.subset(it)) {
    console.log("DMP is a subset of IT.");
}
else {
    console.log("DMP is not a subset of IT.");
}
