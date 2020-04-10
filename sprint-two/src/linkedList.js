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

    list.head.next = node;
    list.tail = node;

  };

  list.removeHead = function () {

    var toRemove = list.head;

    list.head = list.head.next;

    return toRemove.value;
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
 * Complexity: What is the time complexity of the above functions?
 */
