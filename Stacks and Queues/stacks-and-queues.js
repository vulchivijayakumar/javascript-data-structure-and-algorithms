/*
  # Data Structures
  All about Stacks and Queues
  1. Stacks
  2. Stacks Interface
  3. Implementing a Stack
  4. Queues
  5. Creating Stacks and Queues
  6. Creating Stacks and Queues solutions
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
myTodos.size();






/*
  Queues - FirstIn and FirstOut (FIFO) - Array
*/