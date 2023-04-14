const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  let countMap = new Map();

  for (let i = 0; i < names.length; i++) {
  let name = names[i];
  if (countMap.has(name)) {
  let count = countMap.get(name);
  let newName = `${name}(${count})`;
  while (countMap.has(newName)) {
  count++;
  newName = `${name}(${count})`;
  }
  countMap.set(name, count + 1);
  countMap.set(newName, 1);
  result.push(newName);
  } else {
  countMap.set(name, 1);
  result.push(name);
  }
  }

return result;
}

module.exports = {
  renameFiles
};
