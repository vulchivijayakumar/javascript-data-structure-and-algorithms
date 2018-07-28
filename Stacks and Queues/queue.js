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
}

Queue.prototype.enqueue = function (value) {
  if (this.count() < this.capaticy) {
    this.storage[this.tail++] = value;
    return this.count();
  }
  return 'Max capacity already reached. Remove element before adding a new one.';
}

Queue.prototype.dequeue = function () {
  let ele = this.storage[this.head];
  delete this.storage[this.head];
  if (this.head < this.tail) this.head++;
  return ele;
}

Queue.prototype.peek = function () { // first element
  return this.storage[this.head];
}

Queue.prototype.count = function () {
  return this.tail - this.head;
}

Queue.prototype.contains = function (value) {
  for (let i = this.head; i < this.tail; i++) {
    if (this.storage[i] === value) return true;
  }
  return false;
}

Queue.prototype.until = function (value) {
  for (let i = this.head; i < this.tail; i++) {
    if (this.storage[i] === value) return i - this.head + 1;
  }
  return null;
}

let myQueue = new Queue(5);
myQueue.enqueue('vijay');
myQueue.enqueue(1);
myQueue.enqueue('kumar');

myQueue.peek(); // vijay
myQueue.count(); // 3
myQueue.contains('vijay'); // true
myQueue.until(1); // location 2
myQueue.dequeue(); // removes peek element that is vijay.