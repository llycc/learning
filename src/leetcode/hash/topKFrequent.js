/**
 *  692. 前K个高频单词
 *  https://leetcode-cn.com/problems/top-k-frequent-words/
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
  const map = new Map();
  for(let i = 0; i < words.length; i++) {
    map.set(words[i], (map.get(words[i]) || 0) + 1);
  }
  console.log(map);
  return Array.from(map).sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] < b[0] ? -1 : 1;
    }
    return b[1] - a[1];
  }).slice(0, k).map(item => item[0]);
};
