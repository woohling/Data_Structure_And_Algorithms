/**
 * Created by EmmaWu on 2016/10/13.
 */
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top - 1];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}

var stacks = new Stack();
stacks.push(1);
stacks.push(2);
stacks.push(3);
var ele = stacks.pop();
// console.log(stacks);
// console.log(ele);

//example:
var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
// console.log(s.peek());
var popped = s.pop();
// console.log(s.dataStore);
// console.log("The popped element is: " + popped);
// console.log(s.peek());
s.push("Cynthia");
// console.log(s.peek());
s.clear();

function mulBase(num, base) {
    var s = new Stack();
    do {
        s.push(num % base);
        num = Math.floor (num /= base);
    } while (num > 0);
    var converted = '';
    while (s.length() > 0) {
        converted += s.pop();
    }
    return converted;
}

var decimal = mulBase(32, 2);
console.log(decimal);

function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; i++) {
        s.push(word[i]);
    }
    var converted = '';
    while (s.length() > 0) {
        converted += s.pop();
    }
    if (word == converted) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome('helleh'));

function factorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n*factorial(n-1);
    }
}

function fact(n) {
    var s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    var result = 1;
    while(s.length() > 0) {
        result = result * s.pop();
    }
    return result;
}

console.log(fact(5));
console.log(factorial(5));