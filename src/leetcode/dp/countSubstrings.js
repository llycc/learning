/**
 * 647. 回文子串
 * https://leetcode-cn.com/problems/palindromic-substrings/
 * @param {string} s
 * @return {number}
 */
// 动态规划
var countSubstrings = function(s) {
  const dp = [];
  for(let i = 0; i < s.length; i++) {
    dp.push([]);
  }
  let count = 0;

  for(let i = s.length - 1; i >= 0; i--) {
    dp[i][i] = true;
    count++;
    if (i + 1 >= s.length) {
      continue;
    }
    dp[i][i+1] = s.charAt(i) === s.charAt(i + 1);
    if (dp[i][i+1]) {
      count++;
    }
    for(let j = i + 2; j < s.length; j++) {
      if (s.charAt(i) === s.charAt(j) && dp[i+1][j - 1]) {
        count++;
        dp[i][j] = true;
      } else {
        dp[i][j] = false;
      }
    }
  }
  return count;
};
// 中心扩展
var countSubstrings = function(s) {
  const centerCount = 2 * s.length -1;
  let count=0;
  for(let i = 0; i < centerCount; i++) {
    let left = parseInt(i / 2);
    let right = left + i % 2;
    while(left >= 0 && right < s.length && s.charAt(left) === s.charAt(right)) {
      left--;
      right++;
      count++;
    }
  }
  return count;
}
