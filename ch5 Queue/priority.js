var Queue = require('./queue');

function Patient(name, code) {
    this.name = name;
    this.code = code;
}

function dequeue() {
    var priority = this.dataStore[0].code;
    for (var i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i].code > priority) {
            priority = i;
        }
    }
    console.log(priority);
    console.log(this.dataStore);
    return this.dataStore.splice(priority, 1);
}

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " code: " + this.dataStore[i].code + "\n";
    }
    return retStr;
}

var ed = new Queue();
ed.dequeue = dequeue;
ed.toString = toString;

var p = new Patient("Smith", 5);
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);

var seen = ed.dequeue();
console.log(ed.dataStore);
console.log(seen[0].name);

var seen = ed.dequeue();
console.log(ed.dataStore);
// console.log(seen[0].name);
//
// while(!ed.isEmpty()) {
//     var seen = ed.dequeue();
//     console.log(ed.dataStore.length);
//     console.log(seen[0].name);
// }
