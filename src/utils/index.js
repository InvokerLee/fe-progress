/**
 * @desc Array => Tree
 * @param {Array} - list
 * @param {String | Number} - pid
 * @returns {Object} - result
 */
export function arrayToTree(list, pid) {
  const result = [];
  list.forEach((item) => {
      if (item.pid == pid) {
        item.children = arrayToTree(list, item.id);
        result.push(item);
      }
  });

  return result;
}

/**
 * @desc Array => Tree
 * @param {Array} - list
 * @returns {Object} - result
 */
export function arrayToTree2(list, topId) {
  const arr = [];
  const map = {};
  const createEmptyItem = () => ({ children: [] });

  list.forEach((item) => {
    const { id, pid } =item;

    if (!map[id]) {
      map[id] = createEmptyItem();
    }

    map[id] = {
      ...item,
      children: map[id].children
    }
    const current = map[id];
    if (pid === topId) {
      arr.push(current);
    } else {
      if (!map[pid]) {
        map[pid] = createEmptyItem();
      }
      map[pid].children.push(current);
    }
  })
  return arr;
}
