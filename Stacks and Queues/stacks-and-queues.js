/*
  # Data Structures
  All about Stacks
  1. Stacks
  2. Stacks Interface
  3. Implementing a Stack
  4. MinStack
*/

/*
  Stacks - LastIn and FirstOut (LIFO) - Array
  1. Storage // Constructor Function
  2. Push() // Methods
  3. Pop()
  4. Size()
  We are using string now
*/

let Stack = function () {
  this.storage = ''; // string
}

Stack.prototype.push = function (str) {
  this.storage = this.storage.concat('$$$', str); // seperating each todo task string with $$$.
  console.log(this.storage);
}

Stack.prototype.pop = function (str) {
  this.storage = this.storage.substring(0, this.storage.lastIndexOf('$$$'));
  console.log(this.storage);
}

Stack.prototype.size = function () {
  console.log(this.storage.length);
}

let myTodos = new Stack();
myTodos.push('Call to mom');
myTodos.push('Pick up friend');
myTodos.push('Take a breakfast');
myTodos.pop(); // remove last string i.e 'Take a breakfast';
myTodos.pop(); // remove last string i.e 'Pick up friend';
myTodos.size(); // size of the string includes $$$

// Practice Instead of string use object. then array if you have time.

function myStack(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
}

myStack.prototype.push = function (value) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
}

myStack.prototype.pop = function () {
  let value = this.storage[this._count];
  delete this._storage[this._count];
  if (this._count < 0) {
    this._count = 0;
  }
}

myStack.prototype.peek = function() {
  return this._storage[this._count - 1];
}

myStack.prototype.count = function() {
  return this._count;
};

// minStack - minimum value in a Stack
function minStack(capacity) {
  this._capacity = capacity;
  this._storage = {};
  this._count = 0;
  this._min = new myStack(capacity);
}

minStack.prototype.push = function (value) {
  if(this._count < this._capacity) {
    if (this._min.peek() < value) {
      this._min.push(this._min.peek());
    } else {
      this._min.push(value);
    }
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
}

minStack.prototype.pop = function () {
  this._min.pop();
  let value = this._storage[--this._count];
  delete this._storage[this._count];
  if (this._count < 0) {
    this._count = 0;
  }
  return value;
}

minStack.prototype.peek = function () { // peek means last element
  return this._storage[this._count-1];
}

minStack.prototype.count = function() {
  return this._count;
};

minStack.prototype.min = function() {
  return this._min.peek();
};

let myMinStack = new minStack(3);

myMinStack.push(8);
myMinStack.push(4);
myMinStack.push(2);
