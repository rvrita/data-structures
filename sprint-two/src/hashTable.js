

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  // count variable to check how many tuples we have
  this.count = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  // if no current element in storage (in the bucket of the index)
  if (!this._storage.get(index)) {
    // initialize an empty array
    this._storage.set(index, []);
    // add tuple to the bucket with key, value
    this._storage.get(index).push([k, v]);
    // increment count after pushing a new
    this.count++;
    // checking if the current count is about 75%
    if (this.isAbove75(this.count, this._limit)) {
      // if yes, call rebalance function (to rehash the tuples into a new array)
      this.rebalance(true);
    }
  }
  //if we already have the bucket, we need to iterate through the tuples inside the bucket
  for (var i = 0; i < this._storage.get(index).length; i++) {
    //if key already exists in a tuple
    if (this._storage.get(index)[i][0] === k) {
      // update the value
      this._storage.get(index)[i][1] = v;
    } else {
      //if key does not exist in tuple, push as new tuple in bucket
      this._storage.get(index).push([k, v]);
      // update count
      this.count++;
      // checking if the current count is about 75%
      if (this.isAbove75(this.count, this._limit)) {
        // if yes, call rebalance function (to rehash the tuples into a new array)
        this.rebalance(true);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // if no key in the storage return undefined
  if (bucket == null) {
    return undefined;
  }
  for (var i = 0; i < bucket.length; i++) {
    //if key in tuple matches parameter k, return value
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  // iterate through tuples in storage array at index
  for (var i = 0; i < bucket.length; i++) {
    // if the key matches
    if (bucket[i][0] === k) {
      // remove tuple from bucket
      bucket.splice(i, 1);
      // updated count
      this.count--;
      // check if size is under 25% of the limit
      if (this.isBelow25(this.count, this._limit)) {
        this.rebalance(false);
      }
    }
  }
};

HashTable.prototype.isAbove75 = function(count, limit) {
  // if the count reached 75%
  if (count > (limit * 0.75)) {
    // return true
    return true;
  }
  return false;
};

HashTable.prototype.isBelow25 = function(count, limit) {
  // if the count is at 25%
  if (count < (limit * 0.25)) {
    // return true
    return true;
  }
  return false;
};

HashTable.prototype.rebalance = function(isGrow) {
  // copying previous storage
  var prevStorage = this._storage;
  // if we are at 75%
  if (isGrow) {
    // double the size
    this._limit = 2 * this._limit;
  } else {
    // else half the size
    this._limit = Math.ceil(this._limit / 2);
  }
  // making a new limitedarray with new size
  this._storage = LimitedArray(this._limit);
  // reset count
  this.count = 0;
  // looping through each previously hashed item
  prevStorage.each(bucket => {
    // if there are no tuples in the bucket return (go to next)
    if (bucket == null) {
      return;
    }
    // rehashing them into the new array
    for (var i = 0; i < bucket.length; i++) {
      this.insert(bucket[i][0], bucket[i][1]);
    }
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * Insert: Constant time
 * Retrieve: Constant time
 * Remove: Constant time
 * IsAbove75: Constant time
 * IsBelow25: Constant time
 * Rebalance: Linear time
 *
 */


