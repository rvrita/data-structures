var LinkedList = function () {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function (value) {
    var node = Node(value);

    if (list.head === null && list.tail === null) {
      list.head = node;
      list.tail = node;
      return;
    }

    list.tail.next = node;
    list.tail = node;

  };

  list.removeHead = function () {

    var toRemove = list.head;

    list.head = list.head.next;

    return toRemove.value;
  };

  // create list.remove function
  list.remove = function (value) {
    // iterate through the list to find node with value
    if (list.head.value === value) {
      // remove head
      list.removeHead();
    }
    // starting from head
    var node = list.head;
    while (node.next) {
      // if the next node's value is the value we are looking for
      if (node.next.value === value) {
        // we set node's next to the next's next
        node.next = node.next.next;
        return true;
      }
      // iterating to the next node
      node = node.next;
    }
    return false;
  };

  list.contains = function (target, obj) {

    var currentObj = obj || list.head;

    if (currentObj.value === target) {
      return true;
    } else if (currentObj.next === null) {
      return false;
    } else {
      var doesContain = list.contains(target, currentObj.next);
    }

    return doesContain;
  };

  return list;
};


var Node = function (value) {

  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*

Complexity: What is the time complexity of the above functions?

 addToTail, removeHead: constant O(1)
 remove: linear O(n)
 contains: linear O(n)

 */
