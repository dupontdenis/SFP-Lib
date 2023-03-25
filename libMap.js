
export const keysTab = (aMap) => {
  return [...aMap.keys()]
}

export const ramdomKey = (aMap) => {
  const tab = keysTab(aMap);
  return function () {
    const ramdom = parseInt(Math.random() * aMap.size);
    return tab[ramdom];
  }
}

export const reverseMap = (aMap) => Object.keys(aMap).reduce((acc, key) =>
  Object.assign(acc, { [aMap[key]]: key }), {})
