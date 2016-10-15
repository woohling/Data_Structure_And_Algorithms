/**
 * Created by EmmaWu on 2016/10/15.
 */
var LList = require('./doublyLinkedNode');

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("new!", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle");
cities.display();
console.log();
cities.remove("Carlisle");
cities.display();
console.log();
cities.displayReverse();
