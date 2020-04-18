

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //this.count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //if no current element in array at index, initialize element as empty array
  if (!this._storage[index]) {
    this._storage[index] = [];
    //add tuple to array
    this._storage[index].push([k, v]);
    //this.count++;
  }
  //iterate through tuples
  for (var i = 0; i < this._storage[index].length; i++) {
    //if key already exists in a tuple, update the value
    if (this._storage[index][i][0] === k) {
      this._storage[index][i][1]= v;
    } else {
      //if key does not exist in tuple, push as new tuple in bucket
      this._storage[index].push([k, v]);
      //this.count++;
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //iterate through elements in array at index
  for (var i = 0; i < this._storage[index].length; i++) {
    //if key in tuple matches parameter k, return value
    if (this._storage[index][i][0] === k) {
      return this._storage[index][i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //iterate through tuples at storage array index
  for (var i = 0; i < this._storage[index].length; i++) {
    if (this._storage[index][i][0] === k) {
      //remove tuple from bucket
      this._storage[index].splice(i,1);
      //this.count--;
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * Insert: Constant time
 * Retrieve: Constant time
 * Remove: Constant time
 *
 */


