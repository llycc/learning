/**
 * 62. 不同路径
 * https://leetcode-cn.com/problems/unique-paths/
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  const dp = [];
  let top = 1;
  for(let i = 0; i < n; i++) {
    dp[i] = 1;
  }
  for(let i = 1; i < m; i++) {
    top = 1;
    for(j = 1; j < n; j++) {
      top = dp[j] = dp[j] + top;

    }
  }
  return dp[n - 1];
};
