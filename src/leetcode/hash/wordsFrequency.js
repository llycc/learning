/**
 * 面试题 16.02. 单词频率
 * https://leetcode-cn.com/problems/words-frequency-lcci/
 * @param {string[]} book
 */
var WordsFrequency = function(book) {
  this._dict = new Map();
  book.forEach((word) => {
    const num = this._dict.has(word) ? this._dict.get(word) + 1 : 1;
    this._dict.set(word, num);
  });
};

/**
 * @param {string} word
 * @return {number}
 */
WordsFrequency.prototype.get = function(word) {
  return this._dict.get(word) || 0;
};
