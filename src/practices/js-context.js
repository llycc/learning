
/**
 * @desc 模拟new
 * 1.创建一个空对象
 * 2.设置该对象的__proto__指向构造函数的原型对象
 * 3.将步骤1新创建的对象作为this的上下文 执行构造函数
 * 4.如果构造函数没有返回对象则返回1中创建的对象
 * */
function myNew(func, ...arg) {
  const ctx = Object.create(func.prototype);
  const result = func.apply(ctx, arg);
  return result instanceof Object ? result : ctx;
}

/**
 * @desc 实现Function.prototype.call
 * */

Function.prototype.myCall = function(ctx, ...args) {
  const key = Symbol('tempKey');
  ctx[key] = this;
  const result = ctx[key](...args);
  delete ctx[key];
  return result;
};

/**
 * @desc 实现apply
 * */
Function.prototype.myApply = function(ctx, args) {
  const key = Symbol('tempKey');
  ctx[key] = this;
  const result = ctx[key](...args);
  delete ctx[key];
  return result;
};

/**
 * @desc 实现bind
 * */
Function.prototype.myBind = function(ctx, ...args) {
  const func = this;
  return function(...extraArgs) {
    const key = Symbol('tempKey');
    ctx[key] = func;
    const result = ctx[key](...args, ...extraArgs);
    delete ctx[key];
    return result;
  }
};
