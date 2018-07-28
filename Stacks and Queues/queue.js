/*
  # Data Structures
  All about Queues
  1. Queues
  2. Creating Stacks and Queues
  3. Creating Stacks and Queues solutions
  4. Implementing a Queue with Two Stacks solutions
*/

/*
  Queues - FirstIn and FirstOut (FIFO) - Array
  first item enqueued - added into the queue
  first item dequeued - taken out of the queue
  1. Storage // Constructor Function
  2. enqueue() // Methods
  3. dequeue()
  4. Size()
  We are using object now
*/

function Queue(capacity) {
  this.capaticy = capacity || Infinity;
  this.storage = {};
  this.head = 0; // starting point
  this.tail = 0; // ending point
};

Queue.prototype.enqueue = function (value) {
  if (this.count() < this.capaticy) {
    this.storage[this.tail++] = value;
    return this.count();
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
};

Queue.prototype.dequeue = function () {
  let ele = this.storage[this.head];
  delete this.storage[this.head];
  if (this.head < this.tail) this.head++;
  return ele;
};

Queue.prototype.peek = function () { // first element
  return this.storage[this.head];
};

Queue.prototype.count = function () {
  return this.tail - this.head;
};

Queue.prototype.contains = function (value) {
  for (let i = this.head; i < this.tail; i++) {
    if (this.storage[i] === value) return true;
  }
  return false;
};

Queue.prototype.until = function (value) {
  for (let i = this.head; i < this.tail; i++) {
    if (this.storage[i] === value) return i - this.head + 1;
  }
  return null;
};

let myQueue = new Queue(5);
myQueue.enqueue('vijay');
myQueue.enqueue(1);
myQueue.enqueue('kumar');

myQueue.peek(); // vijay
myQueue.count(); // 3
myQueue.contains('vijay'); // true
myQueue.until(1); // location 2
myQueue.dequeue(); // removes peek element that is vijay.


// Implementing a Queue with Two Stacks solutions
function myStack(capacity) {
  this._capacity = capacity || Infinity;
  this._storage = {};
  this._count = 0;
};

myStack.prototype.push = function (value) {
  if (this._count < this._capacity) {
    this._storage[this._count++] = value;
    return this._count;
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
};

myStack.prototype.pop = function () {
  let value = this.storage[this._count];
  delete this._storage[this._count];
  if (this._count < 0) {
    this._count = 0;
  }
};

myStack.prototype.peek = function() {
  return this._storage[this._count - 1];
};

myStack.prototype.count = function() {
  return this._count;
};

function QueueTwoStacks () {
  this.stackIn = new myStack();
  this.stackOut = new myStack();
};

QueueTwoStacks.prototype.enqueue = function (value) {
  this.stackIn.push(value);
};

QueueTwoStacks.prototype.transferStacks = function () {
  while (this.stackIn.count() > 0) {
    this.stackOut.push(this.stackIn.pop());
  }
};

QueueTwoStacks.prototype.dequeue = function () {
  if (this.stackOut.count() === 0) this.transferStacks();
  return this.stackOut.pop();
};

QueueTwoStacks.prototype.count = function () {
  return this.stackIn.count() + this.stackOut.count();
};


let myQueueTwoStacks = new QueueTwoStacks();