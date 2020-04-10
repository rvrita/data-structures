var LinkedList = function () {
  var list = {};
  list.head = null; //{data: , next:  }
  list.tail = null; //{ value: 4, next: null }

  //{
  //  head : null, //3 { data : 3, next : null }
  //  tail : null //3
  // }

  list.addToTail = function (value) { //value = 3
    var node = Node(value); // { value : 3, next : null }

    if (list.head === null && list.tail === null) {
      list.head = node; // { 4, null}
      list.tail = node; // { 4, null }
      return;
    }

    //head { 4, null }
    // list.head.next = node; //node = {5, null }
    // list.tail = node; // {value: 5 , next: null }

    // -> 6
    list.tail.next = node; //node = {5, next: 6 }
    list.tail = node; // node = {6, null}



    // list.tail.next = node; //node = {5, null}
    // list.tail = node;  // {value: 5 , next: null }

  };

  list.removeHead = function () {
    var toRemove = list.head;  // { 4 , null }
    list.head = list.head.next; // null
    //debugger;
    return toRemove.value;
  };

  list.contains = function (target, obj) {
    console.log('target', typeof target);
    var currentObj = obj || list.head;
    console.log(currentObj);
    console.log(typeof currentObj.value);
    var doesContain = false;

    if (currentObj.value === target) {
      console.log('evaluates true');
      doesContain = true;
    } else if (currentObj.next === null) {
      doesContain = false;
    } else {
      list.contains(target, currentObj.next);
    }

    return doesContain;

  };

  return list;
};

/*

list.head = { data: aa, next: bb}
list.middle = {value : a, next : b}, {value: b, next: c}

list.[data] : [next]
list.[data] : [next] { data: bb, next: cc }

list.head = { value : headvalue, next : "3"}
list."3" = {value: 3, next: tailvalue}
list.tail = { value : tailvalue, next: null}

//1, 2, 3, 4
{

head : { value: 2, next: { 3 }},
"3" : {value: 3, next: { tail }}
tail : {value: 4, next: null}
}

{value: 1, next: 2},

list.tail = { data: cc, next: null}

var tail = {
  data: XX
  next: {
    data:YY,
    next: {
      data:zZ,
      next: null

    }
  }
}
*/

var Node = function (value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
