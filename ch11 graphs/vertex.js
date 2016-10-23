
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
        console.log();
    }
}

var graph = new Graph(5);
console.log(graph.adj);
graph.addEdge(0,1);
graph.addEdge(0,2);
graph.addEdge(1,3);
graph.addEdge(2,4);
graph.showGraph();
