
/**
 * 字符串中的第一个唯一字符
 * 题目： https://leetcode-cn.com/problems/first-unique-character-in-a-string/
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  const map = new Map();
  for(let i = 0; i < s.length; i++) {
    map.has(s[i]) ? map.set(s[i], -1) : map.set(s[i], i);
  }
  for(let [key, index] of map) {
    if (index !== -1) {
      return index;
    }
  }
  return -1;
};
