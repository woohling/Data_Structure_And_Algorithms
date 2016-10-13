/**
 * Created by EmmaWu on 2016/10/13.
 */
function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
}

function push(element) {
    this.dataStore[this.top ++] = element;
    // this.dataStore.push(element);
    // this.top ++;
}

function pop(element) {
    this.dataStore.pop(element);
    this.top --;
}

function peek(element) {

}