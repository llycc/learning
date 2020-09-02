/**
 * 64. 最小路径和
 * https://leetcode-cn.com/problems/minimum-path-sum/
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  const sums = new Array(grid.length);
  sums[0] = [grid[0][0]];
  for(let i = 1; i < grid.length; i++) {
    sums[i] = [sums[i - 1][0] + grid[i][0]];
  }
  for(let j = 1; j < grid[0].length; j++) {
    sums[0][j] = sums[0][j - 1] + grid[0][j];
  }

  for(let i = 1; i < grid.length; i++) {
    for(let j = 1; j < grid[0].length; j++) {
      sums[i][j] = Math.min(sums[i - 1][j], sums[i][j - 1]) + grid[i][j];
    }
  }
  return sums[sums.length - 1][sums[0].length - 1];
};
