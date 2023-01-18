export const uniq = (a: any[]) => {
  const prims = { boolean: {}, number: {}, string: {} };
  const objs: any[] = [];

  return a.filter((item) => {
    const type = typeof item;
    if (type in prims) {
      return prims[type].hasOwnProperty(item)
        ? false
        : (prims[type][item] = true);
    } else {
      return objs.indexOf(item) >= 0 ? false : objs.push(item);
    }
  });
};

export const groupBy = (list:[], keyGetter:any, valueName:string) => {
  const map = new Map();
  list.forEach((item) => {
    const key = keyGetter(item);
    const collection = map.get(key);
    if (!collection) {
      map.set(key, [item]);
    } else {
      collection.push(item);
    }
  });
  return map;
};

export const removeKey = (Object:any,keyName:string) => {
  Object.keys(Object)
    .filter((key:string) => key !== keyName)
    .reduce((obj:any, key:string) => {
      obj[key] = Object[key];
      return obj;
    }, {});
};

export const isJSON = (str) => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};
