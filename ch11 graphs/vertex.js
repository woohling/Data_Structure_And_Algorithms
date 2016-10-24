
function Vertex(label) {
    this.label = label;
}

function Graph(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = [];
    for (var i = 0; i < this.vertices; ++i) {
        this.adj[i] = [];
        this.adj[i].push("");
    }
    this.addEdge = addEdge;
    this.toString = toString;
    this.showGraph = showGraph;
    this.marked = [];
    for (var i = 0; i < this.vertices.length; i++) {
        this.marked[i] = false;
    }
    this.depthSearch = depthSearch;
    this.breadthSearch = breadthSearch;
}

function addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges ++;
}

function toString() {

}

function showGraph() {
    for (var i = 0; i < this.vertices; ++i) {
        console.log( i + '->');
        for (var j = 0; j < this.vertices; ++j) {
            if (this.adj[i][j] !== undefined) {
                console.log(this.adj[i][j] + ' ');
            }
        }
    }
}

function depthSearch(v) {
    this.marked[v] = true;
    if (this.adj[v] !== undefined) {
        console.log("Visited vertex: " + v);
    }
    for (var i = 1; i < this.adj[v].length; ++i) {
        if (!this.marked[this.adj[v][i]]) {
            this.depthSearch(this.adj[v][i]);
        }
    }
}

function breadthSearch(s) {
    var queue = [];
    this.marked[s] = true;
    queue.push(s)
    while (queue.length > 0) {
        var v = queue.shift(); // remove from front of queue if (v == undefined) {
        console.log("Visited vertex: " + v);
        for (var i = 1; i < this.adj[v].length; ++i) {
            var w = this.adj[v][i];
            if (!this.marked[w]) {
                // this.edgeTo[w] = v;
                this.marked[w] = true;
                queue.push(w);
            }
        }
    }

}

var graph = new Graph(5);
console.log(graph.adj);
graph.addEdge(0,1);
graph.addEdge(0,2);
graph.addEdge(1,3);
graph.addEdge(2,4);
// graph.showGraph();
// graph.depthSearch(0);
graph.breadthSearch(0);
