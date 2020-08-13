/**
 *  第一个只出现一次的字符
 *  题目：https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function(s) {
  const strMap = new Map();
  const len = s.length;

  for(let i = 0; i < len; i++) {
    const value = strMap.has(s[i]) ? false : true;
    strMap.set(s[i], value);
  }
  for(let item of strMap) {
    if (item[1]) {
      return item[0];
    }
  }
  return ' ';
};
