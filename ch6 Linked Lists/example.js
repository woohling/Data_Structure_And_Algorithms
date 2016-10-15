/**
 * Created by EmmaWu on 2016/10/15.
 */

var nodeList = require('./node');
var Node;
var LList;
Node = nodeList.Node;
LList = nodeList.LList;

var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Alma", "Russellville");
cities.display();
