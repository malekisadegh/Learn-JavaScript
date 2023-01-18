const isEmptyObj = (obj: Object) => {
  if (!obj) {
    return true;
  }
  for (const prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      return false;
    }
  }
  return JSON.stringify(obj) === JSON.stringify({});
};

const isEmpty = (value: any) => {
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  return value === null || value === '' || value === undefined;
};

export { isEmptyObj, isEmpty };
