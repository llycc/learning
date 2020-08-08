/**
 * 函数fn的签名如下：
 * fn(n: number, min: number, max: number) => Array<number>
 * 其返回一个长度为n的数组，数组内是随机且不重复的整数，整数的范围是[min,max]
 * 实现函数fn
 * */

/**
 * 根据min和max生成一个备选数组，
 * 在备选数组的长度范围内随机生成索引，
 * 使用索引从备选数组取值
 * 从备选数组中删除所有的值
 * */
function fn(n, min, max) {
  const resList = [];
  const list = Array.from({length: max-min + 1}, (v, i) => {
    return i + min;
  });
  for(let j = 0; j < n;j++) {
    const value = Math.round(Math.random() * list.length);
    resList.push(list[value]);
    list.splice(value, 1);
  }
  return resList;
}

const list = fn(90, 2, 100);
console.log(list);
