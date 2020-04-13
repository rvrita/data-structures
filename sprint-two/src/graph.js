var Graph = function() {
  // array for node values
  this.nodeList = [];
  // object for connections
  this.list = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.nodeList.push(node);
  this.list[node] = [];
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodeList.includes(node);
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var i = 0; i < this.list[node].length; i++) {
    this.removeEdge(this.list[node][i], node);
  }
  this.nodeList.splice(this.nodeList.indexOf(node), 1);
  delete this.list[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  return (this.list[fromNode].indexOf(toNode)) !== -1;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.list[fromNode].push(toNode);
  this.list[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (this.list[fromNode].indexOf(toNode) !== -1) {
    this.list[fromNode].splice(this.list[fromNode].indexOf(toNode), 1);
    this.list[toNode].splice(this.list[toNode].indexOf(fromNode), 1);
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  return this.nodeList.map(node => cb(node));
};

/*
Complexity: What is the time complexity of the above functions?

addNode: constant O(1)
contains: linear O(n)
removeNode: quadratic O(n^2)
hasEdge: linear O(n)
addEdge: contant O(1)
removeEdge: linear O(n)
forEachNode: linear O(n)
 */


