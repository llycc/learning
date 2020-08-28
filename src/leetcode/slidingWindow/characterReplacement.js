/**
 * 424. 替换后的最长重复字符
 * https://leetcode-cn.com/problems/longest-repeating-character-replacement/
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
// 滑动窗口
var characterReplacement = function(s, k) {
  let i = 0, j = 0, maxLen = 0;
  const charMap = new Map();

  while(j < s.length) {
    const curCount =(charMap.get(s.charAt(j)) || 0) + 1;
    charMap.set(s.charAt(j), curCount);
    maxLen = Math.max(curCount, maxLen);

    j++;
    if (maxLen + k < j - i) {
      charMap.set(s.charAt(i), charMap.get(s.charAt(i))-1);
      i++;
    }

  }
  maxLen += k;
  return maxLen > s.length ? s.length : maxLen;
};
