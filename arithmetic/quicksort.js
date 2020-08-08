/**
 * 快排
 * 原理：取一个基准值，从左右两边遍历数组，比基准值小的放在左边，比基准值大的放在右边，然后递归排序左右两边
 * 实现：1.从最左边取基准值，从右边开始遍历，找到小于基准值的数就和基准值交互位置。
 *      2.然后遍历左边找出大于等于基准值的数，和基准值交互位置。
 *      3.重复以上步骤，知道左右索引相等
 *      4.归位基准值
 *      5，递归左右数组重复以上步骤
 * */


function quickSort(list, left, right) {
  let leftIndex = left;
  let rightIndex = right;
  const base = list[left];
  if (left >= right) {
    return;
  }
  while(leftIndex < rightIndex) {
    while(base < list[rightIndex] && leftIndex < rightIndex) {
      rightIndex--;
    }
    if (leftIndex < rightIndex) {
      list[leftIndex] = list[rightIndex];
      leftIndex++;
    }
    while(base >= list[leftIndex] && leftIndex < rightIndex) {
      leftIndex++
    }

    if (leftIndex < rightIndex) {
      list[rightIndex] = list[leftIndex];
      rightIndex--;
    }
  }
  list[leftIndex] = base;
  quickSort(list, left, leftIndex - 1);
  quickSort(list, leftIndex + 1, right);

}

const list = [3,4,5,1,3,7,2,11];
quickSort(list, 0, list.length - 1);
console.log(list);
