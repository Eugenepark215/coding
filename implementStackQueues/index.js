var MyStack = function () {
  this.q1 = [];
  this.q2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  // q1 is not empty it will run (becomes empty after shift method on line 13)
  while (this.q1.length !== 0) {
    // q1 empties into q2
    this.q2.push(this.q1.shift());
  }
  // new element is pushed into q1 regardless or replenished with new element
  this.q1.push(x);
  while (this.q2.length !== 0) {
    // q2 empties into q1 with new element on top of stack
    this.q1.push(this.q2.shift());
  }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function () {
  return this.q1.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function () {
  return this.q1[0];

};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return this.q1.length === 0;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

/**
 Input
["MyStack", "push", "push", "top", "pop", "empty"]
[[], [1], [2], [], [], []]
Output
[null, null, null, 2, 2, false]

Explanation
MyStack myStack = new MyStack();
myStack.push(1);
myStack.push(2);
myStack.top(); // return 2
myStack.pop(); // return 2
myStack.empty(); // return False
 */
