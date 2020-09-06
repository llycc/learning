/**
 * 1423. 可获得的最大点数
 * https://leetcode-cn.com/problems/maximum-points-you-can-obtain-from-cards/
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function(cardPoints, k) {
  const size = cardPoints.length - k;
  let sum = 0, minRestSum = Infinity, restSum = 0;

  for(let index = 0; index < cardPoints.length; index++) {
    restSum += cardPoints[index];
    sum += cardPoints[index];

    if (index >= size) {
      restSum -= cardPoints[index - size];
    }
    if (index >= size - 1) {
      minRestSum = Math.min(restSum, minRestSum);
    }
  }
  return sum - minRestSum;
};
