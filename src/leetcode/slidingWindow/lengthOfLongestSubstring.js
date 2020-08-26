/**
 * 3. 无重复字符的最长子串
 * https://leetcode-cn.com/problems/longest-substring-without-repeating-characters/
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let i = 0, j = 0, maxLen = 0;
  const charSet = new Set();

  while(j < s.length) {
    const char = s.charAt(j);
    while(charSet.has(char)) {
      charSet.delete(s.charAt(i));
      i++
    }
    charSet.add(char);
    j++;
    maxLen = Math.max(j - i, maxLen);
  }
  return maxLen;
};
