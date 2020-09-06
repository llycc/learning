/**
 * 剑指 Offer 14- I. 剪绳子
 * https://leetcode-cn.com/problems/jian-sheng-zi-lcof/
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
  if (n <= 3) {
    return n - 1;
  }
  const dp = new Array(n + 1).fill(0);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;

  for(let i = 4; i <= n; i++) {
    for(let j = 1; j <= i/2; j++) {
      const temp = dp[j] * dp[i - j];
      dp[i] = Math.max(temp, dp[i]);
    }
  }
  return dp[n];
};
