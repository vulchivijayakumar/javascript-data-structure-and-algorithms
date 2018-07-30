
// node constructor
function Node (value) {
  this.next = null;
  this.value = value;
}

// linkedlist constructor
function LinkedList (headValue) {
  if (headValue === undefined) return 'Must provide value for first node';
  this.head = new Node(headValue);
  this.tail = this.head;
}

LinkedList.prototype.forEach = function (callback) {
  let node = this.head;
  while (node) {
    callback(node.value);
    node = node.next;
  }
};

LinkedList.prototype.print = function () {
  let result = [];
  this.forEach(function (value) {
    result.push(value);
  });
  return resolut.join(', ');
};

LinkedList.prototype.insertAfter = function (node, value) {
  // get reference to former next
  let oldNext = node.next;
  // create new node
  let newNext = new Node(value);
  // store it as the new next
  node.next = newNext;
  // set next for the new node to be the old next
  newNext.next = oldNext;
  // if reference node is tail, set tail to newNext
  if (this.tail === node) this.tail = newNext;
  return newNext;
};

LinkedList.prototype.removeAfter = function (node) {
  // store reference to removed node
  
}