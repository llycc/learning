/**
 * @desc 深拷贝
 * */
function deepCopy(data) {
  const valueMap = new Map();
  const copy = function(value) {
    if (valueMap.has(value)) {
      return valueMap.get(value);
    }
    if (Array.isArray(value)) {
      const list = [];
      valueMap.set(value, list);
      for(let item of value) {
        list.push(copy(item));
      }
      return list;
    } else if (typeof value === 'object' && value) {
      const obj = {};
      valueMap.set(value, obj);
      Object.getOwnPropertySymbols(value).concat(Object.keys(value)).forEach(key => {
        obj[key] = copy(value[key]);
      });
      return obj;
    } else {
      return value;
    }
  }
}
