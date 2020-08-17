
/**
 * 面试题 03.02
 * https://leetcode-cn.com/problems/min-stack-lcci/
 * initialize your data structure here.
 */
var MinStack = function() {
  this._stack = [];
  this._minStack = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this._minStack.push(Math.min(x, this.getMin()));
  this._stack.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this._minStack.pop();
  this._stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this._stack[this._stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this._minStack.length > 0 ? this._minStack[this._minStack.length - 1] : Infinity;
};
