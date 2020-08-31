/**
 * 70. 爬楼梯
 * https://leetcode-cn.com/problems/climbing-stairs/
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 1) {
    return n ;
  }
  let a = 1, b = 2;
  for(let i = 2; i < n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
};
