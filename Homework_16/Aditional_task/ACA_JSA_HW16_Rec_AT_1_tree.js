let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
};

function valueByTreeKey(tree, res = []) {
  if (tree === null) {
    return res;
  }
  res.push(tree.value);
  return valueByTreeKey(tree.next, res);
}
valueByTreeKey(list);