var BinarySearchTree = function (value) {
  // creating object
  var tree = Object.create(BinarySearchTree.prototype);
  //create value property
  tree.value = value;
  //create left property
  tree.left = null;
  //create right property
  tree.right = null;

  return tree;

};

BinarySearchTree.prototype = {};

BinarySearchTree.prototype.insert = function (value) {
  //create newNode with value
  var newNode = BinarySearchTree(value);
  //compare value to this.value
  if (newNode.value > this.value) {
    //if right is null, add value
    if (this.right === null) {
      this.right = newNode;
    } else {
      //if not null, recursively call on right node
      this.right.insert(value);
    }
  } else {
    //if left is null, add value
    if (this.left === null) {
      this.left = newNode;
    } else {
      //if not null, recursively call on left node
      this.left.insert(value);
    }
  }


};

BinarySearchTree.prototype.contains = function (value) {
  //if node value equals passed value return true
  if (this.value === value) {
    return true;
  }

  //if right or left is null, return false - no more values to compare
  //if not null, recursively call to right or left
  if (value > this.value) {
    return (this.right === null) ? false : this.right.contains(value);
  } else {
    return (this.left === null) ? false : this.left.contains(value);
  }


};

BinarySearchTree.prototype.depthFirstLog = function (cb) {
  //call on first value
  cb(this.value);
  //if left is not null call on left - recursion on left
  if (this.left !== null) {
    this.left.depthFirstLog(cb);
  }
  //if right is not null, call on right - recursion on right
  if (this.right !== null) {
    this.right.depthFirstLog(cb);
  }
};

BinarySearchTree.prototype.remove = function (value) {

  //set flag for if the item was removed
  var itemRemoved = false;

  //if tree has nodes on right side of current node
  if (this.right) {
    //if chile of current node is the value to remove
    if (this.right.value === value) {
      if (this.right.right === null && this.right.left === null) {
        //if value has no children, remove value by setting parent = null
        this.right = null;
        itemRemoved = true;
      } else if (this.right.right !== null && this.right.left !== null) {
        //if value has two children
        this.right.left.right = this.right.right;
        this.right = this.right.left;
        itemRemoved = true;
      } else if (this.right.right === null || this.right.left === null) {
        //if value has one child
        this.right = (this.right.right === null) ? this.right.left : this.right.right;
        itemRemoved = true;
      }
    }
  }

  //if tree has values on the left side
  if (this.left) {
    if (this.left.value === value) {
      if (this.left.right === null && this.left.left === null) {
        //if value has no children, remove value by setting parent = null
        this.left = null;
        itemRemoved = true;
      } else if (this.left.right !== null && this.left.left !== null) {
        //if value has two children
        this.left.right.left = this.left.left;
        this.left = this.left.right;
        itemRemoved = true;
      } else if (this.left.right === null || this.left.left === null) {
        //if value has one child
        this.left = (this.left.right === null) ? this.left.left : this.left.right;
        itemRemoved = true;
      }
    }
  }

  //if value has not been found yet, use recursion to find/remove
  if (!itemRemoved) {
    if (value > this.value) {
      return this.right.remove(value);
    } else {
      return this.left.remove(value);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 *
 * insert: O(n)
 * contains: O(n)
 * depthFirstLog: O(n)
 * Remove: O(n)
 *
 */