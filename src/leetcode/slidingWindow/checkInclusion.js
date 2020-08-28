/**
 * 567. 字符串的排列
 * https://leetcode-cn.com/problems/permutation-in-string/
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  const s1Map = new Map();
  const subMap = new Map();
  let left = 0, right = 0, size = s1.length;

  for(let char of s1) {
    s1Map.set(char, (s1Map.get(char) || 0) + 1);
  }
  while(right < s2.length && right - left !== size) {
    let char = s2.charAt(right);
    let curCount = (subMap.get(char) || 0) + 1;

    if (!s1Map.has(char)) {
      right++;
      left = right;
      subMap.clear();
      continue;
    }
    while(s1Map.get(char) < curCount && left < right) {
      const leftChar = s2.charAt(left);
      if (leftChar === char) {
        curCount--;
      }
      subMap.set(leftChar, subMap.get(leftChar) -1);
      left++;
    }
    subMap.set(char, curCount);
    right++;
  }
  return right - left === size;
};
