/**
 * 面试题 08.01. 三步问题
 * https://leetcode-cn.com/problems/three-steps-problem-lcci/
 * @param {number} n
 * @return {number}
 */
var waysToStep = function(n) {
  const dpList = [1,2,4];
  if (n < 4) {
    return dpList[n - 1];
  }
  for(let i = 3; i < n; i++) {
    const temp = (dpList[0] + dpList[1] + dpList[2]) % 1000000007;
    dpList[0] = dpList[1];
    dpList[1] = dpList[2];
    dpList[2] = temp;
  }
  return dpList[2];
};
